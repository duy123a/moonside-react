import * as React from 'react';
import { Post } from '@/types/postsType';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { PostCard } from '../PostCard/PostCard';

export interface PostListProps {
  data?: Post[];
}

export default function PostList({ data = [] }: PostListProps) {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}>
        {data.map((post) => (
          <Grid item key={post.id} xs={2} sm={4} md={4} lg={4}>
            <PostCard post={post}></PostCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
