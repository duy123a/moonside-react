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
      <Grid container spacing={4}>
        {data.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={6} lg={4}>
            <PostCard post={post}></PostCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
