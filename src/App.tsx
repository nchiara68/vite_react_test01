import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Keep Routes, Remove Router
import { Typography, Box } from '@mui/material';
import DashboardSummary from './components/DashboardSummary';
import Invoices from './pages/Invoices';

const Dashboard: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      maxWidth: '100%',
      padding: 2
    }}
  >
    <Typography
      variant="h2"
      color="primary"
      gutterBottom
      sx={{
        textAlign: 'center',
        width: '100%',
      }}
    >
      Welcome to the Dashboard 🚀
    </Typography>

    <DashboardSummary />

    <Typography variant="body1" sx={{ marginTop: 4, textAlign: 'center' }}>
      This is the main dashboard page.
    </Typography>
  </Box>
);

function App() {
  console.log('✅ App Component Rendered!');

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/invoices" element={<Invoices />} />
    </Routes>
  );
}

export default App;
