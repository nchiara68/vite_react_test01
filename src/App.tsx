import { Container, Typography } from '@mui/material';
import InvoiceTable from './components/InvoiceTable';

function App() {
  console.log('✅ App Component Rendered!');

  return (
    <Container>
      <Typography variant="h2" color="primary" gutterBottom>
        Welcome to the Invoices Page 🚀
      </Typography>

      <InvoiceTable />

      {/* Add this to confirm content rendering */}
      <Typography variant="body1" sx={{ marginTop: 4 }}>
        If you see this, the page is rendering successfully.
      </Typography>
    </Container>
  );
}

export default App;
