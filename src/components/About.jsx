import React, { useRef, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import * as THREE from "three"; 
import BIRDS from "vanta/dist/vanta.birds.min"; 

const About = () => {
  const vantaRef = useRef(null); 
  const vantaEffect = useRef(null); 

  useEffect(() => {
    
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current, 
        THREE: THREE, 
        color: 0x1976d2, 
        backgroundColor: 0xf0f0f5, 
        speedLimit: 5.0, 
        separation: 60.0, 
        alignment: 80.0, 
        cohesion: 40.0, 
        wingSpan: 25.0, 
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
        padding: { xs: "2rem 1rem", md: "6rem 4rem" },
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
        color: "#333",
        position: "relative",
        overflow: "hidden", 
      }}
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          About Me
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.8,
            fontFamily: "'Roboto', sans-serif",
            color: "#555",
            mb: 4,
          }}
        >
          I'm Kaviraj Mani, a full-stack developer with expertise in technologies like{" "}
          <strong style={{ color: "#1565c0" }}>React.js</strong>,{" "}
          <strong style={{ color: "#1565c0" }}>Flutter</strong>,{" "}
          <strong style={{ color: "#1565c0" }}>Firebase</strong>, and{" "}
          <strong style={{ color: "#1565c0" }}>Node.js</strong>. I specialize in
          creating responsive, scalable applications that are both functional and user-friendly.
          My passion lies in learning new technologies and solving real-world problems through code.
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mt: 6 }}>
        {[{
          title: "What Drives Me",
          content: "I’m motivated by the challenge of solving problems with technology. I enjoy learning new tools, improving my skills, and applying them to build better solutions. Creating intuitive and impactful applications is what keeps me passionate about my work.",
        }, {
          title: "My Interests",
          content: "Outside of coding, I enjoy listening to music, cooking, and playing games. Music helps me relax and stay creative, while cooking allows me to experiment with flavors. Gaming is another hobby, with Red Dead Redemption 2 being my favorite for its immersive experience.",
        }].map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 + index * 0.2 }}
            >
              <Box
                sx={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  padding: "2rem",
                  boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  maxWidth: "90%",
                  mx: "auto",
                  "&:hover": { transform: "scale(1.05)" },
                  transition: "transform 0.3s",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#1565c0",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.4, color: "#555" }}
                >
                  {item.content}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, delay: 0.5 }}
      >
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#1565c0",
              fontWeight: "bold",
              mb: 2,
              fontSize: "1.5rem",
            }}
          >
            Specialized Skill
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              maxWidth: "600px",
              mx: "auto",
              color: "#555",
            }}
          >
            My expertise lies in creating seamless, cross-platform experiences using{" "}
            <strong style={{ color: "#1565c0" }}>React.js</strong> for the frontend and{" "}
            <strong style={{ color: "#1565c0" }}>Node.js</strong> for the backend. I also
            have experience with <strong style={{ color: "#1565c0" }}>Flutter</strong> for
            mobile development and leveraging tools like <strong style={{ color: "#1565c0" }}>Docker</strong> for containerization.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default About;
