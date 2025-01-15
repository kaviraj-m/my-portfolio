import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ background: '#222', color: '#fff', py: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
       
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Thank you for visiting my website!
        </Typography>

        <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
          © {new Date().getFullYear()} Kaviraj M. All Rights Reserved.
        </Typography>

        <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
          Crafted with passion and dedication.
        </Typography>

        <Typography variant="body2">
          <Link
            href="https://www.kaviraj.online"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              textDecoration: 'none',
              '&:hover': {
                color: '#3498db',
              },
            }}
          >
            Visit My Portfolio
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
