import React, { useEffect, useRef } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import styled from '@emotion/styled';
import NET from 'vanta/dist/vanta.net.min'; 
import * as THREE from 'three'; 

import kavuchiImage from '../assets/kavuchi.jpg';
import shreecoirsImage from '../assets/shreecoirs.png';
import nodueImage from '../assets/nodue.png';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative; 
  overflow: hidden; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;


const projects = [
  {
    title: 'Meat Delivery App - Kavuchi',
    description: 'A cross-platform Flutter app for meat delivery with Firebase backend. Includes shop name and user management features.',
    image: kavuchiImage,
    liveDemo: '',
    repo: 'https://github.com/kaviraj-m/kavuchi_meat_delivery.git',
  },
  {
    title: 'Shree Coirs - Coir Products Website',
    description: 'A static website for a coir product selling company, developed using React.js and Three.js.',
    image: shreecoirsImage,
    liveDemo: 'https://cocostrong.kaviraj.online',
    repo: 'https://github.com/kaviraj-m/shree_coirs.git',
  },
  {
    title: 'No Due Management System',
    description: 'A college project for managing dues, built with React.js, Node.js, Express.js, MySQL, and Sequelize.',
    image: nodueImage,
    liveDemo: '',
    repo: 'https://github.com/kaviraj-m/nodue.git',
  },
];

const Projects = () => {
  const vantaRef = useRef(null); 

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE: THREE,
      color: 0x1976d2,
      backgroundColor: 0xf9f9f9,
      points: 10.0,
      maxDistance: 20.0,
      spacing: 15.0,
      showDots: true,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy(); 
    };
  }, []);

  return (
    <Container ref={vantaRef}>
      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          padding: '0 1rem',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#34495e',
          }}
        >
          My Projects
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  margin: 'auto',
                  maxWidth: 360,
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#34495e',
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: project.liveDemo ? 'space-between' : 'flex-end',
                    px: 2,
                    pb: 2,
                  }}
                >
                  {project.liveDemo && (
                    <Button
                      size="small"
                      href={project.liveDemo}
                      target="_blank"
                      sx={{
                        backgroundColor: '#3498db',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#2980b9' },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button
                    size="small"
                    href={project.repo}
                    target="_blank"
                    sx={{
                      color: '#3498db',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    <FaGithub /> View Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
