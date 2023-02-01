import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export interface NotFoundProps {}

export default function NotFound(props: NotFoundProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '90vh',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Back Home
      </Button>
    </Box>
  );
}
