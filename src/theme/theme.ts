import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Blue
    },
    secondary: {
      main: '#FF4081', // Pink
    },
    error: {
      main: '#D32F2F', // Red
    },
    warning: {
      main: '#FFA000', // Amber
    },
    success: {
      main: '#388E3C', // Green
    },
    background: {
      default: '#f4f6f8', // Light gray background
      paper: '#ffffff', // White for cards & tables
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 500 },
    body1: { fontSize: '1rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents all-caps in buttons
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;
