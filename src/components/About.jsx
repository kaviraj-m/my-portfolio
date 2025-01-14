import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center', background: '#f9f9f9' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
        I'm a passionate full-stack developer with expertise in React, Flutter, Firebase, 
        and Node.js. I enjoy creating efficient, user-friendly applications while constantly 
        exploring new technologies like Angular and 3D animations.
      </Typography>
    </Box>
  );
};

export default About;
