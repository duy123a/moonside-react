import { createTheme } from '@mui/material/styles';
import './myThemeD';

// Material-UI has got typing declarations already defined so you can't just add extra properties to it.
// You would have to extend the interface via module augmentation:

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    box: {
      main: 'rgba(0, 0, 0, 0.5)',
      dark: '#212121',
    },
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
