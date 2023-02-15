import postApi from '@/apis/postsApi';
import Filter from '@/components/Filter';
import SkeletonList from '@/components/SkeletonList';
import { Pagination as PaginationType, Post, SearchParams } from '@/types/postsType';
import { calcQuantity, RerenderContext } from '@/utils';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostList from '../../components/PostList';

export interface PostListPageProps {}

export default function PostListPage(props: PostListPageProps) {
  // Number of items we want to render
  const quantity = React.useMemo(() => {
    return calcQuantity();
  }, [navigator.userAgent]);

  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  const queryParams: SearchParams = React.useMemo(() => {
    const params = Object.fromEntries(new URLSearchParams(location.search));
    return {
      ...params,
      _page: parseInt(params._page) || 1,
      _limit: parseInt(params._limit) || quantity,
    };
  }, [location.search]);

  const [postList, setPostList] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [rerender, setRerender] = React.useState(false);

  const rerendering = () => {
    setRerender((prevState) => !prevState);
  };

  const [pagination, setPagination] = React.useState<PaginationType>({
    _page: 1,
    _limit: quantity,
    _totalRows: 10,
  });

  React.useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const { data } = await postApi.getAll(queryParams, controller.signal);
        const { data: postListData, pagination: paginationData } = data;
        // console.log({ postListData, paginationData });
        setPostList(postListData);
        setPagination(paginationData);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name !== 'CanceledError') {
            /* Logic for non-aborted error handling goes here. */
            enqueueSnackbar(`Failed to fetch post list: ${error.message}`, { variant: 'error' });
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
  }, [queryParams, rerender]);

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    const filters = {
      ...queryParams,
      _page: page.toString(),
    };
    const filtersParams = new URLSearchParams(filters as Record<string, string>);
    navigate({
      pathname: location.pathname,
      search: filtersParams.toString(),
    });
  };

  const handleFilterChange = (filters: SearchParams) => {
    const filtersParams = new URLSearchParams(filters as Record<string, string>);
    navigate({
      pathname: location.pathname,
      search: filtersParams.toString(),
    });
  };

  return (
    <RerenderContext.Provider value={rerendering}>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: '1px',
          overflowY: 'scroll',
          bgcolor: 'box.main',
        }}
      >
        <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Typography variant="h4" sx={{ color: 'text.primary', mt: 2 }}>
            Latest posts
          </Typography>
          <Filter filterParams={queryParams} onChange={handleFilterChange}></Filter>
          <Box sx={{ width: '100%', mt: 3 }}>
            {loading ? <SkeletonList length={quantity} /> : <PostList data={postList}></PostList>}
          </Box>
          <Box sx={{ my: 2 }}>
            <Pagination
              count={Math.ceil((pagination._totalRows as number) / (pagination._limit as number))}
              page={pagination._page as number}
              onChange={handlePageChange}
            />
          </Box>
        </Container>
      </Box>
    </RerenderContext.Provider>
  );
}
