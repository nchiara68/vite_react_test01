// /pages/Invoices.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import InvoiceTable from '../components/InvoiceTable';

const Invoices: React.FC = () => (
  <Container>
    <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 2 }}>
      📄 Invoices Summary
    </Typography>

    <InvoiceTable />
  </Container>
);

export default Invoices;
