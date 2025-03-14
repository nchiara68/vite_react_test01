import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Invoices from './pages/Invoices';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar open={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          padding: 3,
          marginLeft: isSidebarOpen ? '240px' : '60px', // ✅ Dynamic margin
          transition: 'margin-left 0.3s ease',          // ✅ Smooth animation
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to My App! 🚀
        </Typography>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
