import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const skills = ['React.js', 'Flutter', 'Node.js', 'Firebase', 'Redux', 'CSS3', 'HTML5'];

const Skills = () => {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        My Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Typography
              sx={{
                padding: '1rem 2rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#fff',
              }}
            >
              {skill}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
