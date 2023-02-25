import postApi from '@/apis/postsApi';
import { Post } from '@/types/postsType';
import { jsonToFormData, removeUnusedFields } from '@/utils';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PostForm from '../../components/PostForm';

export interface PostEditProps {
  post: Post;
}

export default function PostEdit({ post }: PostEditProps) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [bannerImage, setBannerImage] = React.useState(post?.imageUrl);

  const timeOutId = React.useRef(0);

  const handleSubmit = async (values: Record<string, any>) => {
    try {
      const payload = removeUnusedFields(values);
      payload.id = post.id;
      let savedPost: any = {};
      if (payload.imageUrl) {
        savedPost = await postApi.update(payload);
      } else {
        const formData = jsonToFormData(payload);
        savedPost = await postApi.updateFormData(formData);
      }
      // show noti
      enqueueSnackbar('Edit post successfully!', { variant: 'success' });
      // redirect to main page, we can clean this one but it's fine if we don't clean too
      timeOutId.current = window.setTimeout(() => {
        navigate(`/posts/${savedPost.data.id}`);
      }, 3000);
    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(`Failed to edit post: ${error.message}`, { variant: 'error' });
        console.log('Failed to edit post', error);
      } else {
        console.log('Unknown error');
      }
    }
  };

  React.useEffect(() => {
    // clean the time out
    return () => {
      clearTimeout(timeOutId.current);
    };
  }, []);

  const handleBannerImage = (imageUrl: string) => {
    setBannerImage(imageUrl);
  };

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '1px',
        alignItems: 'center',
        flexDirection: 'column',
        overflowY: 'scroll',
        bgcolor: 'box.main',
      }}
    >
      <Box
        width="100%"
        height={200}
        minHeight={200}
        sx={{
          display: 'flex',
          backgroundColor: 'background.paper',
          backgroundImage: `url("${bannerImage}")`,
          backgroundSize: 'cover',
        }}
      ></Box>
      <Container>
        <Paper sx={{ px: 3, py: 4, mt: -5 }}>
          <Typography variant="h4">Edit a post</Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            Please enter the following information and submit then.
          </Typography>
          <Divider sx={{ my: 2 }}></Divider>
          <PostForm
            post={post}
            onSubmit={handleSubmit}
            onBannerChange={handleBannerImage}
          ></PostForm>
        </Paper>
      </Container>
    </Box>
  );
}
