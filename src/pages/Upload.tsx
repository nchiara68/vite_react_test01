import React from 'react';
import { Box, Typography } from '@mui/material';

const Upload: React.FC = () => (
  <Box
    sx={{
      padding: { xs: 2, md: 4 },             // ✅ Responsive Padding
      textAlign: 'center',                    // ✅ Centered Content
    }}
  >
    <Typography
      variant="h3"
      sx={{ fontSize: { xs: '2rem', md: '3rem' } }} // ✅ Responsive Font Size
    >
      📤 Upload Page
    </Typography>
  </Box>
);

export default Upload;
