import postApi from '@/apis/postsApi';
import NotFound from '@/components/NotFound';
import { Post } from '@/types/postsType';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from '../../components/PostDetail';
import PostDetailSkeleton from '../../components/PostDetailSkeleton';

export interface PostDetailPageProps {}

export default function PostDetailPage(props: PostDetailPageProps) {
  const params = useParams();
  const postId = params.postId || '';

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [post, setPost] = React.useState<Post>({
    id: '',
    author: '',
    imageUrl: '',
    title: '',
    createdAt: 0,
    updatedAt: 0,
  });

  React.useEffect(() => {
    const controller = new AbortController();
    const getDataId = async () => {
      try {
        const { data } = await postApi.getById(postId, controller.signal);
        setPost(data);
        setIsSuccess(true);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name !== 'CanceledError') {
            /* Logic for non-aborted error handling goes here. */
            console.log('failed to fetch post', error);
            setLoading(false);
          }
        } else {
          console.log('Unknown error');
        }
      }
    };

    getDataId();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <PostDetailSkeleton></PostDetailSkeleton>;
  } else {
    if (isSuccess) {
      return <PostDetail post={post}></PostDetail>;
    } else {
      return <NotFound></NotFound>;
    }
  }
}
