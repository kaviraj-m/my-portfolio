import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <Box>
      <Box id="home">
        <Hero />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </Box>
  );
};

export default Home;
