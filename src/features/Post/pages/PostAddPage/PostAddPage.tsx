import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PostForm from '../../components/PostForm';

export interface PostAddPageProps {}

export default function PostAddPage(props: PostAddPageProps) {
  const [bannerImage, setBannerImage] = React.useState('');
  const handleSubmit = async (values: any) => {
    console.log(values);
  };
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
