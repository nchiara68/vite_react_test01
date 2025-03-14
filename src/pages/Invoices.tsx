import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import InvoiceTable from '../components/InvoiceTable';

const Invoices: React.FC = () => (
  <Container
    maxWidth={false}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: { xs: '100%', md: '1000px' },  // ✅ Responsive Width
      margin: '0 auto',
      padding: { xs: 2, md: 4 },                // ✅ Responsive Padding
    }}
  >
    <Typography 
      variant="h2" 
      color="primary" 
      align="center"
      sx={{ fontSize: { xs: '1.8rem', md: '3rem' } }} // ✅ Responsive Font Size
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
