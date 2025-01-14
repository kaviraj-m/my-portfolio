import React from 'react';
import { Box, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import { Email, GitHub, LinkedIn, Phone } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box
      sx={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Contact Me
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, color: '#555' }}>
        I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              mx: 'auto',
              maxWidth: '400px',
            }}
          >
            <TextField label="Your Name" variant="outlined" fullWidth required />
            <TextField label="Your Email" type="email" variant="outlined" fullWidth required />
            <TextField
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
            />
            <Button type="submit" variant="contained" sx={{ alignSelf: 'center', width: '50%' }}>
              Send Message
            </Button>
          </Box>
        </Grid>

        {/* Contact Info & Social Links */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Phone />
              <Typography>+91-1234567890</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Email />
              <Typography>kaviraj@example.com</Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Find Me On
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <IconButton
                  href="https://github.com/kavirajm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/kavirajm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="mailto:kaviraj@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Email />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
