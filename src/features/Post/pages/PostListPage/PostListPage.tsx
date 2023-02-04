import postApi from '@/apis/postsApi';
import SkeletonList from '@/components/SkeletonList';
import { calcQuantity } from '@/utils';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import * as React from 'react';
import PostList from '../../components/PostList';
import Pagination from '@mui/material/Pagination';

export interface PostListPageProps {}

export default function PostListPage(props: PostListPageProps) {
  const [postList, setPostList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Number of items we want to render
  const quantity = React.useMemo(() => {
    return calcQuantity();
  }, [navigator.userAgent]);

  const [pagination, setPagination] = React.useState({
    _page: 1,
    _limit: quantity,
    _totalRows: 10,
  });

  const [filters, setFilters] = React.useState({
    _page: 1,
    _limit: quantity,
  });

  React.useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const { data } = await postApi.getAll(filters, controller.signal);
        const { data: postListData, pagination: paginationData } = data;
        console.log({ postListData, paginationData });
        setPostList(postListData);
        setPagination(paginationData);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name !== 'CanceledError') {
            /* Logic for non-aborted error handling goes here. */
            console.log('failed to fetch post list', error);
            setLoading(false);
          }
        } else {
          console.log('Unknown error');
        }
      } finally {
        // Don't put it here because the canceledError will make the code always jump inside this block
        // setLoading(false);
      }
    };

    getData();

    // clean up function when unmounted to avoid getData fired twice in React Strict Mode (v18)
    return () => controller.abort();
  }, [filters]);

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        bgcolor: 'box.main',
      }}
    >
      <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ color: 'text.primary', my: 2 }}>
          Latest posts
        </Typography>
        <Box sx={{ width: '100%' }}>
          {loading ? <SkeletonList length={quantity} /> : <PostList data={postList}></PostList>}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Pagination
            count={Math.ceil(pagination._totalRows / pagination._limit)}
            page={pagination._page}
            onChange={handlePageChange}
          />
        </Box>
      </Container>
    </Box>
  );
}
