import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

export const themeApp = createTheme({
  palette: {
    primary: {
      main: grey[900],
      light: grey[500],
      dark: grey[900],
      // contrastText: blue[500]
    },
    secondary: {
      main: '#f44336',
    },
  },
});