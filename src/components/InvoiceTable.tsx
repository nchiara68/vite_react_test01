import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Chip
} from '@mui/material';
import { invoices } from '../data/invoicesData';

const InvoiceTable: React.FC = () => (
  <TableContainer
    component={Paper}
    sx={{
      width: '100%',         // ✅ Full width within the container
      maxWidth: '1000px',    // ✅ Prevents it from becoming too wide
      margin: '0 auto',      // ✅ Ensures perfect centering
      textAlign: 'center',   // ✅ Aligns content horizontally
      boxShadow: 3,          // Optional visual enhancement
      padding: 2,            // Adds breathing room
    }}
  >
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><strong>Invoice #</strong></TableCell>
          <TableCell><strong>Customer</strong></TableCell>
          <TableCell><strong>Amount ($)</strong></TableCell>
          <TableCell><strong>Status</strong></TableCell>
          <TableCell><strong>Date</strong></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.customer}</TableCell>
            <TableCell>${invoice.amount.toFixed(2)}</TableCell>
            <TableCell>
              <Chip
                label={invoice.status}
                color={
                  invoice.status === 'Paid' ? 'success' :
                  invoice.status === 'Pending' ? 'warning' : 'error'
                }
                variant="outlined"
              />
            </TableCell>
            <TableCell>{invoice.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default InvoiceTable;
