import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        Hi, I'm Kaviraj M
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Full-stack developer passionate about crafting solutions that matter.
      </Typography>
      <Button variant="contained" sx={{ mt: 3 }}>
        View My Work
      </Button>
    </Box>
  );
};

export default Hero;
