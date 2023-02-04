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
            <Box>
              <Skeleton
                sx={{ bgcolor: 'box.dark' }}
                variant="rectangular"
                width="100%"
                height={118}
              />
              <Box sx={{ mt: 0.5 }}>
                <Skeleton sx={{ bgcolor: 'box.dark' }} width="60%" />
              </Box>
              <Box sx={{ mt: 0.5 }}>
                <Skeleton sx={{ bgcolor: 'box.dark' }} />
                <Skeleton sx={{ bgcolor: 'box.dark' }} />
                <Skeleton sx={{ bgcolor: 'box.dark' }} />
              </Box>
              <Box sx={{ mt: 0.5 }}>
                <Skeleton sx={{ bgcolor: 'box.dark' }} width="60%" />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
