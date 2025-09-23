import { Box, Typography, Grid, Paper } from "@mui/material";
import { FaJava, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaJsSquare } from "react-icons/fa";

export default function Services() {
  const services = [
    { title: "Web Development", desc: "Modern, responsive websites with React & MUI.", icon: <FaReact size={40} /> },
    { title: "UI/UX Design", desc: "Clean and futuristic designs with smooth user flow.", icon: <FaCss3Alt size={40} /> },
    { title: "Backend APIs", desc: "Secure and fast APIs with Node.js & Express.", icon: <FaPhp size={40} /> },
    { title: "Java", desc: "Object-oriented programming for scalable applications.", icon: <FaJava size={40} /> },
    { title: "MySQL", desc: "Efficient and secure relational database management.", icon: <FaDatabase size={40} /> },
    { title: "HTML & CSS", desc: "Structure and style for web pages.", icon: <><FaHtml5 size={40} /> <FaCss3Alt size={40} /></> },
    { title: "JavaScript", desc: "Interactive and dynamic web functionality.", icon: <FaJsSquare size={40} /> },
    { title: "React", desc: "Modern front-end framework for responsive UI.", icon: <FaReact size={40} /> },
    { title: "PHP", desc: "Server-side scripting for dynamic web applications.", icon: <FaPhp size={40} /> },
    { title: "About Me", desc: "Passionate developer with experience in web and app development.", icon: null },
  ];

  return (
    <Box
      id="services"
      sx={{
        width: "100%",
        minHeight: "100vh",
        py: 8,
        background: "linear-gradient(90deg, rgba(18,0,36,1) 0%, rgba(79,11,87,1) 65%, rgba(109,24,120,1) 100%, rgba(189,144,214,1) 0%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "@keyframes glow": {
          "0%": { filter: "drop-shadow(0 0 5px #ff00ff)" },
          "50%": { filter: "drop-shadow(0 0 20px #ff00ff)" },
          "100%": { filter: "drop-shadow(0 0 5px #ff00ff)" },
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 5,
          fontFamily: "'Orbitron', sans-serif",
          color: "#fff",
        }}
      >
        My Services
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ px: { xs: 2, md: 4 } }}>
        {services.map((s) => (
          <Grid item xs={12} sm={6} md={4} key={s.title}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                background: "linear-gradient(135deg, #2b0a3d, #43125d)",
                color: "#fff",
                borderRadius: 3,
                minHeight: 150,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {s.icon && (
                <Box
                  sx={{
                    mb: 2,
                    animation: "glow 2s ease-in-out infinite alternate",
                  }}
                >
                  {s.icon}
                </Box>
              )}
              <Typography variant="h5" sx={{ mb: 1 }}>
                {s.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                {s.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
