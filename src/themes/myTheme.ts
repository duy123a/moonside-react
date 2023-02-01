import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90CAF9',
    },
    secondary: {
      main: '#DBE2EF',
    },
    background: {
      paper: '#112D4E',
    },
    text: {
      primary: '#F9F7F7',
      secondary: 'rgba(249, 247, 247, 0.7)',
      disabled: 'rgba(249, 247, 247, 0.5)',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});
