import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ListPost from './pages/ListPost';

export interface PostProps {}

export default function Post(props: PostProps) {
  return (
    <Box
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
        <ListPost></ListPost>
      </Container>
    </Box>
  );
}
