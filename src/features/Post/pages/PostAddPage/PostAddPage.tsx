import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PostForm from '../../components/PostForm';
import { IMAGE_SOURCE, jsonToFormData, removeUnusedFields } from '@/utils';
import postApi from '@/apis/postsApi';
import { useNavigate } from 'react-router-dom';

export interface PostAddPageProps {}

export default function PostAddPage(props: PostAddPageProps) {
  const navigate = useNavigate();
  const [bannerImage, setBannerImage] = React.useState('');

  const timeOutId = React.useRef(0);

  const handleSubmit = async (values: Record<string, any>) => {
    console.log(values);
    try {
      const payload = removeUnusedFields(values);
      console.log(payload);
      let savedPost = {};
      if (payload.imageUrl) {
        savedPost = await postApi.add(payload);
      } else {
        const formData = jsonToFormData(payload);
        savedPost = await postApi.addFormData(formData);
      }
      // redirect to main page, we can clean this one but it's fine if we don't clean too
      // timeOutId.current = setTimeout(() => {
      //   navigate('/posts');
      // }, 3000);
    } catch (error) {
      console.log('Failed to add post', error);
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
          <Typography variant="h4">Add a post</Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            Please enter the following information and submit then.
          </Typography>
          <Divider sx={{ my: 2 }}></Divider>
          <PostForm onSubmit={handleSubmit} onBannerChange={handleBannerImage}></PostForm>
        </Paper>
      </Container>
    </Box>
  );
}
