import { Box, Typography } from '@mui/material';

export interface DashBoardProps {}

export default function DashBoard(props: DashBoardProps) {
  return (
    <Box display="flex" justifyContent="center">
      <Typography sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}></Typography>
    </Box>
  );
}
