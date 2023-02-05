import { Post } from '@/types/postsType';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';
import * as React from 'react';

export interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  console.log(post);
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
        component="img"
        width="100%"
        height={{ sx: 200, md: 300 }}
        alt={post.title}
        src={post.imageUrl}
      ></Box>
      <Container>
        <Paper sx={{ px: 3, py: 4, mt: -5 }}>
          <Typography variant="h4">{post.title}</Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            {`by ${post.author}${dayjs(post.updatedAt).format(' - DD/MM/YY HH:mm')}`}
          </Typography>
          <Divider sx={{ my: 2 }}></Divider>
          <Typography variant="body1" my={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam pariatur quibusdam
            tenetur nemo tempora incidunt ex doloremque exercitationem dicta. Corporis fuga totam
            nulla voluptatibus possimus similique aliquid nobis illo.
          </Typography>
          <Typography variant="body1" my={1}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit inventore
            hic tenetur, dolor iusto dolorum rem, non error, saepe quia dignissimos quas ducimus
            aliquid. Praesentium ea aspernatur vero deserunt.
          </Typography>
          <Box
            component="img"
            width="100%"
            alt="Picsum img 1"
            src="https://picsum.photos/1368/800?random=1"
          ></Box>
          <Typography variant="body1" my={1}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit inventore
            hic tenetur, dolor iusto dolorum rem, non error, saepe quia dignissimos quas ducimus
            aliquid. Praesentium ea aspernatur vero deserunt.
          </Typography>
          <Typography variant="body1" my={1}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit inventore
            hic tenetur, dolor iusto dolorum rem, non error, saepe quia dignissimos quas ducimus
            aliquid. Praesentium ea aspernatur vero deserunt.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
