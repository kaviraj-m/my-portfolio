import React, { useRef, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaAngular,
} from "react-icons/fa";
import {
  SiFirebase,
  SiRedux,
  SiFlutter,
  SiDjango,
  SiExpress,
  SiSequelize,
  SiPostman,
  SiMongodb,
  SiZapier,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCanva,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact color="#61DAFB" /> },
      { name: "Angular", icon: <FaAngular color="#DD0031" /> },
      { name: "Flutter", icon: <SiFlutter color="#02569B" /> },
      { name: "Redux", icon: <SiRedux color="#764ABC" /> },
      { name: "HTML5", icon: <SiHtml5 color="#E44D26" /> },
      { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "Three.js", icon: <FaReact color="#000000" style={{ fontSize: "2rem" }} /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "Django", icon: <SiDjango color="#092E20" /> },
      { name: "Express.js", icon: <SiExpress color="#000" /> },
      { name: "Sequelize", icon: <SiSequelize color="#52B0E7" /> },
      { name: "SQL", icon: <SiMysql color="#4479A1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    ],
  },
  {
    category: "Tools & Software",
    skills: [
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Zapier", icon: <SiZapier color="#FF4A00" /> },
      { name: "Canva", icon: <SiCanva color="#00C4CC" /> },
      { name: "SQL Workbench", icon: <FaDatabase color="#005C84" /> },
    ],
  },
];

const Skills = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        color: 0x1976d2,
        backgroundColor: 0xf9f9f9,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 15.0,
        showDots: true,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <Box
      ref={vantaRef}
      sx={{
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        padding: { xs: "1rem", md: "2rem" },
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1200px" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#1565c0",
            letterSpacing: "0.05rem",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          My Skills
        </Typography>
        {skills.map((category, index) => (
          <Box key={index} sx={{ mb: 5 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: "bold",
                color: "#333",
                textDecoration: "underline",
                letterSpacing: "0.03rem",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              {category.category}
            </Typography>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              sx={{
                "& .MuiGrid-item": {
                  flex: { xs: "0 0 calc(50% - 1rem)", sm: "0 0 calc(33.33% - 1rem)" },
                },
              }}
            >
              {category.skills.map((skill, idx) => (
                <Grid
                  item
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "1rem",
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <Box sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 1 }}>
                      {skill.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#1565c0",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
