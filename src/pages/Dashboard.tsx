import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Alert, AlertTitle } from '@mui/material';
import InvoiceTable from '../components/InvoiceTable';

interface DashboardProps {
  totalPaid: number;
  totalPending: number;
  totalValuePaid: number;
  totalOutstanding: number;
  overdueInvoices: number;
}

const Dashboard: React.FC<DashboardProps> = ({
  totalPaid,
  totalPending,
  totalValuePaid,
  totalOutstanding,
  overdueInvoices,
}) => (
  <Box sx={{ padding: { xs: 2, md: 4 } }}> {/* Responsive Padding */}
    <Typography 
      variant="h3" 
      align="center" 
      gutterBottom 
      sx={{ fontSize: { xs: '2rem', md: '3rem' } }} // Responsive Font
    >
      📊 Dashboard
    </Typography>

    {/* KPI Cards Section */}
    <Grid container spacing={3}>
      {[
        { label: 'Invoices Paid', value: totalPaid },
        { label: 'Invoices Pending', value: totalPending },
        { label: 'Total Value Paid', value: `$${totalValuePaid.toFixed(2)}` },
        { label: 'Outstanding Amount', value: `$${totalOutstanding.toFixed(2)}` }
      ].map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}> {/* Responsive Grid */}
          <Card sx={cardStyle}>
            <CardContent sx={contentStyle}>
              <Typography variant="h6" sx={labelStyle}>{item.label}</Typography>
              <Typography variant="h4" sx={valueStyle}>
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    {/* Alert for Overdue Invoices */}
    {overdueInvoices > 0 && (
      <Box sx={{ marginTop: 3 }}>
        <Alert severity="error">
          <AlertTitle>Overdue Invoices</AlertTitle>
          You have <strong>{overdueInvoices}</strong> overdue invoices that require immediate action.
        </Alert>
      </Box>
    )}

    {/* Invoice Table Section */}
    <Box sx={{ marginTop: 4 }}>
      <InvoiceTable />
    </Box>
  </Box>
);

// 🔹 Custom Styling for Consistency
const cardStyle = {
  backgroundColor: '#FFFFFF',
  minHeight: { xs: '140px', md: '180px' }, // Responsive Heights
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '16px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': { transform: 'scale(1.05)' },
};

const contentStyle = {
  width: '100%',
  textAlign: 'center',
  padding: { xs: '12px', md: '16px' }, // Responsive Spacing
};

const labelStyle = {
  fontWeight: '700',
  fontSize: { xs: '0.9rem', md: '1rem' }, // Adaptive Font Sizes
};

const valueStyle = {
  fontWeight: 'bold',
  fontSize: { xs: '1.5rem', md: '2rem' }, // Dynamic Font for Numbers
};

export default Dashboard;
