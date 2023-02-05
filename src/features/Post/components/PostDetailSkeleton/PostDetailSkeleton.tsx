import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export interface PostDetailSkeletonProps {}

export default function PostDetailSkeleton(props: PostDetailSkeletonProps) {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        alignItems: 'center',
        flexDirection: 'column',
        bgcolor: 'box.main',
      }}
    >
      <Box width="100%">
        <Box>
          <Skeleton sx={{ bgcolor: 'box.dark' }} variant="rectangular" width="100%" height={118} />
        </Box>
      </Box>
      <Box width="80%" sx={{ mt: 2 }}>
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
        <Box sx={{ mt: 0.5 }}>
          <Skeleton sx={{ bgcolor: 'box.dark' }} variant="rectangular" width="100%" height={118} />
        </Box>
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
    </Box>
  );
}
