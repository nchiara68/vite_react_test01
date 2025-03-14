import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import InvoiceTable from '../components/InvoiceTable';

const Invoices: React.FC = () => (
  <Container
    maxWidth={false} // ✅ Removes the default width limit for maximum flexibility
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100% !important',
      maxWidth: '1000px !important',
     margin: '0 auto !important',
      padding: 3,
    }}
  >
    <Typography 
      variant="h2" 
      color="primary" 
      align="center" 
      gutterBottom
    >
      Invoices Summary
    </Typography>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <InvoiceTable />
    </Box>
  </Container>
);

export default Invoices;
