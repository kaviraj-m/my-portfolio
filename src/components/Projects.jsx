import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'Meat Delivery App',
    description: 'A cross-platform Flutter app for meat delivery with Firebase backend. Includes shop name and user management features.',
    image: 'https://via.placeholder.com/300x180.png?text=Meat+Delivery+App',
    liveDemo: '#',
    repo: '#',
  },
  {
    title: 'Library Management System',
    description: 'Backend system using Node.js, Express.js, Sequelize ORM, and MySQL for managing a library database with user authentication.',
    image: 'https://via.placeholder.com/300x180.png?text=Library+Management+System',
    liveDemo: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built using React and Material-UI, showcasing skills and projects.',
    image: 'https://via.placeholder.com/300x180.png?text=Portfolio+Website',
    liveDemo: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                mx: 'auto',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                {project.liveDemo && (
                  <Button
                    size="small"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                )}
                {project.repo && (
                  <Button
                    size="small"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
