import Box from '@mui/material/Box';

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
      }}
    ></Box>
  );
}
