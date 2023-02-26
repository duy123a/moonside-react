import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface DashBoardProps {}

export default function DashBoard(props: DashBoardProps) {
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
        py: 2,
      }}
    >
      <Container sx={{ bgcolor: 'box.main' }}>
        <Typography component="h1" variant="h3" sx={{ color: 'text.primary', textAlign: 'center' }}>
          Welcome
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.primary', textAlign: 'center' }}>
          May the nightingale's singing follow you into your dream so you can find yourself again.
        </Typography>
      </Container>
    </Box>
  );
}
