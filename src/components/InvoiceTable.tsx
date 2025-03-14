import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Chip
} from '@mui/material';
import { invoices } from '../data/invoicesData';
import type { ChipProps } from '@mui/material';

const statusColor: Record<string, ChipProps['color']> = {
  Paid: 'success',
  Pending: 'warning',
  Overdue: 'error',
};

const InvoiceTable: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
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
                  color={statusColor[invoice.status]}
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
};

export default InvoiceTable;
