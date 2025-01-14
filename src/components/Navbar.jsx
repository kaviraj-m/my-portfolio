import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kaviraj M
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
