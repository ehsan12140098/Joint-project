import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: ['IRANsans'],
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 780,
      lg: 1024,
      xl: 1440,
    },
  },
});
