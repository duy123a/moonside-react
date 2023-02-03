import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface DashBoardProps {}

export default function DashBoard(props: DashBoardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
      }}
    ></Box>
  );
}
