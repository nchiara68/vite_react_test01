import React from 'react';
import { Box, Card, Typography, Grid, Alert } from '@mui/material';

const DashboardSummary: React.FC = () => {
  console.log('✅ DashboardSummary component rendered!');

  // Sample data
  const invoicesPaid = 35;
  const invoicesPending = 12;
  const totalPaid = 8450;
  const outstanding = 1200;
  const overdueAlerts = 3;

  return (
    <Box
      sx={{
        width: '66.66%',
        maxWidth: '900px',
        marginBottom: 3,
        padding: 2,
        border: '2px solid #ddd',
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#ffffff' // White background for contrast
      }}
    >
      {/* Header */}
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 'bold',
          marginBottom: 3,
          borderBottom: '3px solid #000',
          paddingBottom: 1,
        }}
      >
        📊 Dashboard
      </Typography>

      {/* Metrics Section */}
      <Grid container spacing={2}>
        {[
          { label: 'Invoices Paid', value: invoicesPaid },
          { label: 'Invoices Pending', value: invoicesPending },
          { label: 'Total Paid', value: `$${totalPaid.toFixed(2)}` },
          { label: 'Outstanding', value: `$${outstanding.toFixed(2)}` }
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                padding: 3,
                backgroundColor: '#000',    // Black background
                color: '#fff',              // White text
                borderRadius: 2,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)', // Subtle hover effect for elegance
                },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {item.value}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ opacity: 0.8, marginTop: 1 }}
              >
                {item.label}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Alert Section */}
      {overdueAlerts > 0 && (
        <Alert
          severity="error"
          sx={{
            marginTop: 3,
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: '#ffebee',
            border: '2px solid #d32f2f',
          }}
        >
          🔔 Alert: {overdueAlerts} overdue invoices require immediate action
        </Alert>
      )}

      {/* Table Title */}
      <Typography
        variant="h6"
        align="center"
        sx={{
          marginTop: 3,
          padding: 1,
          backgroundColor: '#e3f2fd',
          borderRadius: 1
        }}
      >
        📋 Invoice Table (Detailed List)
      </Typography>
    </Box>
  );
};

export default DashboardSummary;
