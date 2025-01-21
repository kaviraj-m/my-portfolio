import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactsIcon from "@mui/icons-material/Contacts";
import BuildIcon from "@mui/icons-material/Build";

const Navbar = () => {
  const sections = [
    { name: "home", icon: <HomeIcon /> },
    { name: "about", icon: <InfoIcon /> },
    { name: "skills", icon: <BuildIcon /> },
    { name: "projects", icon: <WorkIcon /> },
    { name: "contact", icon: <ContactsIcon /> },
  ];
  const [activeSection, setActiveSection] = useState("home");
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section.name);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = section.name;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); 
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          top: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "16px",
          padding: "0.5rem 1rem",
          width: {
            xs: "90%",
            sm: "80%",
            md: "70%",
          },
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontFamily: "'Roboto', sans-serif",
              color: "primary.main",
            }}
          >
            Kaviraj Mani
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {sections.map((section) => (
              <Button
                key={section.name}
                onClick={() => handleScrollToSection(section.name)}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  color:
                    activeSection === section.name
                      ? "primary.dark"
                      : "text.primary",
                  borderBottom:
                    activeSection === section.name
                      ? "2px solid primary.dark"
                      : "none",
                }}
              >
                {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <IconButton
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", sm: "none" },
              color: "black",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            padding: "1rem",
            backgroundColor: "#f5f5f5",
            height: "100%",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "primary.main",
              textAlign: "center",
            }}
          >
            Menu
          </Typography>
          <Divider sx={{ marginBottom: "1rem" }} />
          <List>
            {sections.map((section) => (
              <ListItem
                key={section.name}
                component="button"
                onClick={() => handleScrollToSection(section.name)}
                sx={{
                  padding: "1rem 1.5rem",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  textTransform: "capitalize",
                  backgroundColor:
                    activeSection === section.name ? "primary.light" : "inherit",
                  color:
                    activeSection === section.name
                      ? "primary.contrastText"
                      : "text.primary",
                  fontWeight: activeSection === section.name ? "bold" : "normal",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
              >
                <Box sx={{ marginRight: 2 }}>{section.icon}</Box>
                <ListItemText
                  primary={section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                  primaryTypographyProps={{
                    variant: "body1",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
