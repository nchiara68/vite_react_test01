import React, { useState } from 'react';
import { Box } from '@mui/material'; // ✅ Removed `Typography`
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
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 3,
          marginLeft: isSidebarOpen ? '240px' : '60px',
          transition: 'margin-left 0.3s ease',
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                totalPaid={35}
                totalPending={12}
                totalValuePaid={8450}
                totalOutstanding={1200}
                overdueInvoices={3}
              />
            }
          />
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
