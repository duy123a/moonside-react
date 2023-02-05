import { Post } from '@/types/postsType';
import Box from '@mui/material/Box';
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
        flexBasis: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        bgcolor: 'box.main',
      }}
    ></Box>
  );
}
