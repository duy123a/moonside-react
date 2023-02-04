import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
      <Typography variant="h1" sx={{ color: 'text.primary' }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.primary' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Back Home
      </Button>
    </Box>
  );
}
