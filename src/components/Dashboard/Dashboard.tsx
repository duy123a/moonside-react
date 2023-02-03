import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface DashBoardProps {}

export default function DashBoard(props: DashBoardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '90vh',
        bgcolor: 'box.main',
      }}
    >
      <Typography variant="h6" style={{ color: 'white' }}>
        May the nightingale's singing follow you into your dream so you can find yourself again.
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        - The Traveler in your dream, Miss Nightingale.
      </Typography>
    </Box>
  );
}
