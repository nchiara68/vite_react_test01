import React from 'react';
import { Typography, Box } from '@mui/material';
import InvoiceTable from '../components/InvoiceTable';
import DashboardSummary from '../components/DashboardSummary';

const Invoices: React.FC = () => {
  console.log('✅ Invoices component rendered!'); // Debug Log

  return (
    <Box
      id="invoices-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        maxWidth: '100%',
        padding: 2
      }}
    >
      <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 2, textAlign: 'center' }}>
        📄 Invoices Summary
      </Typography>

      {/* Dashboard Summary Component */}
      <DashboardSummary />

      <Box
        id="invoice-box"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <InvoiceTable />
      </Box>
    </Box>
  );
};

export default Invoices;
