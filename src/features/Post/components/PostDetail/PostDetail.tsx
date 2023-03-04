import { Post } from '@/types/postsType';
import { Box, Container, Divider, Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';

export interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  //  Quill compatible (not render on quill styles, this required quill.js)
  let description: string = '';
  if (typeof post.description !== 'undefined') {
    if (typeof post.description !== 'string') {
      description = post.description[0].insert;
    } else {
      description = post.description;
    }
  }

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
            {description}
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam pariatur quibusdam
            tenetur nemo tempora incidunt ex doloremque exercitationem dicta. Corporis fuga totam
            nulla voluptatibus possimus similique aliquid nobis illo.
          </p>
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
