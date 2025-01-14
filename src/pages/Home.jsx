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
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Home;
