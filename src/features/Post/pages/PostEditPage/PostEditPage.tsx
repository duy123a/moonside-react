import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '@/types/postsType';
import postApi from '@/apis/postsApi';
import PostDetailSkeleton from '../../components/PostDetailSkeleton';
import NotFound from '@/components/NotFound';
import PostEdit from '../../components/PostEdit';

export interface PostEditPageProps {}

export default function PostEditPage(props: PostEditPageProps) {
  const params = useParams();

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
        if (!params.postId) return;
        const { data } = await postApi.getById(params.postId, controller.signal);
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
      return <PostEdit post={post}></PostEdit>;
    } else {
      return <NotFound></NotFound>;
    }
  }
}
