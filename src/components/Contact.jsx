import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Link,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { FaPhone, FaWhatsapp, FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  gap: 1.5rem;
`;

const BoxContainer = styled(Paper)`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  @media (max-width: 600px) {
    max-width: 90%;
    padding: 0.8rem;
  }
`;

const ContactIcons = styled(Grid)`
  margin-bottom: 1.5rem;
`;

const FormContainer = styled(Box)`
  padding: 1.5rem;
  background-color: #f3f4f6;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:kaviraj9042@gmail.com?subject=Project Inquiry&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AProject Type: ${formData.projectType}%0ATimeline: ${formData.timeline}%0ADescription: ${formData.description}`;
  };

  return (
    <Container>
      {/* Contact Details Section */}
      <BoxContainer>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: 'bold',
            color: '#34495e',
            textAlign: 'center',
          }}
        >
          Contact Information
        </Typography>
        <ContactIcons container spacing={2} justifyContent="center">
          <Grid item xs={4} sm={3} textAlign="center">
            <IconButton
              onClick={() => (window.location.href = 'tel:+917904612266')}
            >
              <FaPhone size={24} color="#1976d2" />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                wordBreak: 'break-word',
                fontSize: '0.8rem',
              }}
            >
              +91 7904612266
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} textAlign="center">
            <IconButton
              onClick={() => window.open('https://wa.me/917904612266', '_blank')}
            >
              <FaWhatsapp size={24} color="#25d366" />
            </IconButton>
          </Grid>
          <Grid item xs={4} sm={3} textAlign="center">
            <IconButton
              onClick={() => (window.location.href = 'mailto:kaviraj9042@gmail.com')}
            >
              <FaEnvelope size={24} color="#d93025" />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                wordBreak: 'break-word',
                fontSize: '0.8rem',
              }}
            >
              kaviraj9042@gmail.com
            </Typography>
          </Grid>
        </ContactIcons>
        <ContactIcons container spacing={2} justifyContent="center">
          <Grid item xs={4} textAlign="center">
            <Link href="https://github.com/kaviraj-m" target="_blank">
              <FaGithub size={24} color="#333" />
            </Link>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Link href="https://www.linkedin.com/in/kaviraj-m" target="_blank">
              <FaLinkedin size={24} color="#0e76a8" />
            </Link>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Link href="https://www.youtube.com/@kavirajtamilan" target="_blank">
              <FaYoutube size={24} color="#ff0000" />
            </Link>
          </Grid>
        </ContactIcons>
      </BoxContainer>

      {/* Form Section */}
      <BoxContainer>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: 'bold',
            color: '#34495e',
            textAlign: 'center',
          }}
        >
          Project Inquiry Form
        </Typography>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Phone Number"
                  variant="outlined"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Project Type</InputLabel>
                  <Select
                    value={formData.projectType}
                    name="projectType"
                    onChange={handleChange}
                  >
                    <MenuItem value="Web Development">Web Development</MenuItem>
                    <MenuItem value="Mobile App Development">Mobile App Development</MenuItem>
                    <MenuItem value="E-commerce">E-commerce</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Preferred Timeline (in weeks)"
                  variant="outlined"
                  fullWidth
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Describe Your Requirements"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    padding: '0.8rem',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormContainer>
      </BoxContainer>
    </Container>
  );
};

export default Contact;
