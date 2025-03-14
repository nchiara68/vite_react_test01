import React from 'react';
import { Box, Typography } from '@mui/material';

const Profile: React.FC = () => (
  <Box
    sx={{
      padding: { xs: 2, md: 4 },            // ✅ Responsive Padding
      textAlign: 'center',                   // ✅ Centered Content
    }}
  >
    <Typography
      variant="h3"
      sx={{ fontSize: { xs: '2rem', md: '3rem' } }} // ✅ Responsive Font Size
    >
      🙍‍♂️ Profile Page
    </Typography>
  </Box>
);

export default Profile;
