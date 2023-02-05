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
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}>
        {Array.from(new Array(length)).map((x, idx) => (
          <Grid item key={idx} xs={2} sm={4} md={4} lg={4}>
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
