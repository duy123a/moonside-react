// Provide import line will make it is treated as a normal module file, not the global one, so augmenting modules definitions doesn't work.
// We need to import this one to make this works

import { Palette, PaletteOptions } from '@mui/material'; // don't remove this line

declare module '@mui/material' {
  interface Palette {
    box: Palette['primary'];
  }

  interface PaletteOptions {
    box?: PaletteOptions['primary'];
  }
}
