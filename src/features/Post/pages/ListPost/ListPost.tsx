import postApi from '@/apis/postsApi';
import SkeletonList from '@/components/SkeletonList';
import { isMobile, quantityKind } from '@/utils';
import Box from '@mui/material/Box';
import * as React from 'react';

export interface ListPostProps {}

export default function ListPost(props: ListPostProps) {
  const [postList, setPostList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Number of items we want to render
  const quantity = isMobile() ? quantityKind.MOBILE : quantityKind.PC;

  React.useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const { data } = await postApi.getAll({ _page: 1, _limit: quantity }, controller.signal);
        const { data: postListData, pagination } = data;
        console.log(postListData, pagination);
        setPostList(postListData);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name !== 'CanceledError') {
            /* Logic for non-aborted error handling goes here. */
            console.log('failed to fetch post list', error);
          }
        } else {
          console.log('Unknown error');
        }
      }
      //   setLoading(false);
    };

    getData();

    // clean up function when unmounted to avoid getData fired twice in React Strict Mode (v18)
    return () => controller.abort();
  }, []);

  return <Box sx={{ width: '100%' }}>{loading ? <SkeletonList length={quantity} /> : <></>}</Box>;
}
