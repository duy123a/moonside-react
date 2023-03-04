import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export interface NotFoundProps {}

export default function NotFound(props: NotFoundProps) {
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
    >
      <Typography variant="h1" sx={{ color: 'text.primary', textAlign: 'center' }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.primary', textAlign: 'center' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Box mt={2}>
        <Button component={Link} to="/" variant="contained">
          Back Home
        </Button>
      </Box>
    </Box>
  );
}
