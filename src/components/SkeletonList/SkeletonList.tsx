import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export interface SkeletonListProps {
  length?: number;
}

export default function SkeletonList({ length = 6 }: SkeletonListProps) {
  return (
    <Box>
      <Grid container spacing={4}>
        {Array.from(new Array(length)).map((x, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={6} lg={4}>
            <Skeleton
              sx={{ bgcolor: 'grey.900' }}
              variant="rectangular"
              width="100%"
              height={118}
            />
            <Skeleton sx={{ bgcolor: 'grey.900' }} />
            <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
