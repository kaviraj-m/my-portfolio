import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 2, background: '#333', color: '#fff' }}>
      <Typography variant="body2">© {new Date().getFullYear()} Kaviraj M. All Rights Reserved.</Typography>
    </Box>
  );
};

export default Footer;
