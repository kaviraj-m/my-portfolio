import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Avatar, useTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import profileImage from "../assets/profile.jpg";
import { motion } from "framer-motion";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

const Hero = () => {
  const vantaRef = useRef(null);
  const theme = useTheme(); 

  const handleWhatsAppRedirect = () => {
    window.open(
      "https://wa.me/+917904612266?text=Hi%20Kaviraj,%20I%20saw%20your%20portfolio!",
      "_blank"
    );
  };

  useEffect(() => {
    if (vantaRef.current) {
      CLOUDS({
        el: vantaRef.current,
        THREE: THREE,
        color: 0x1976d2,
        backgroundColor: 0xf0f0f5,
        points: 12.0,
        zoom: 1.5,
      });
    }

    return () => {
      if (vantaRef.current) {
        CLOUDS.destroy();
      }
    };
  }, []);

  return (
    <Box
      ref={vantaRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "2rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(12px)",
          zIndex: -1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Avatar
          src={profileImage}
          alt="Kaviraj Mani"
          sx={{
            width: "250px",
            height: "250px",
            border: "6px solid #1976d2",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
            filter: "brightness(1.1)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
            borderRadius: "50%",
            marginTop: 0, 
            [theme.breakpoints.down("sm")]: {
              marginTop: "8rem", 
            },
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
            color: "#ffffff",
            fontSize: "3rem",
            letterSpacing: "1px",
            marginTop: "1rem",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          Hi, I'm{" "}
  <Box
    component="span"
    sx={{
      color: "#1976d2", 
    }}
  >
    Kaviraj Mani
  </Box>
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography
          variant="h6"
          sx={{
            mt: 1,
            fontSize: "1.4rem",
            color: "#f5f5f5",
            fontFamily: "'Roboto', sans-serif",
            maxWidth: "700px",
            lineHeight: "1.6",
            marginX: "auto",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.55)",
          }}
        >
          A versatile developer passionate about building impactful web and
          mobile solutions.
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
          mt: 2,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "capitalize",
              fontWeight: 600,
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              fontSize: "1.1rem",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
            href="#projects"
          >
            View My Work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Button
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsAppRedirect}
            sx={{
              textTransform: "capitalize",
              fontWeight: 600,
              padding: "0.8rem 2rem",
              borderRadius: "50px",
              fontSize: "1.1rem",
              backgroundColor: "#25D366",
              color: "#ffffff",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#128C7E",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Chat on WhatsApp
          </Button>
        </motion.div>
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <Box sx={{ mt: 2, maxWidth: "800px", textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#f5f5f5",
              lineHeight: "1.6",
              fontSize: "1rem",
              maxWidth: "600px",
              margin: "auto",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.55)",
            }}
          >
            I specialize in modern frameworks to create responsive, efficient
            web and mobile applications. Let’s collaborate to turn ideas into
            reality and build seamless user experiences.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;
