import { Box, Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh", // full window height
        background: "linear-gradient(90deg,rgba(18, 0, 36, 1) 0%, rgba(79, 11, 87, 1) 65%, rgba(109, 24, 120, 1) 100%, rgba(189, 144, 214, 1) 0%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // stack on mobile
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Text on the left */}
        <Box sx={{ flex: 1, color: "#fff" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: "bold",
              mb: 3,
            }}
          >
           Hello World!!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.8)",
              maxWidth: "500px",
            }}
          >
            Hi! I'm Philip, a passionate developer specializing in building beautiful and functional web applications. Explore my projects and feel free to reach out!
          </Typography>
        </Box>

        {/* Image on the right */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <img
            src="public/image/image.jpg"
            alt="Portfolio"
            style={{
              maxWidth: "500px",
              height: "500px",
              borderRadius: "20%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              objectFit: "cover",
              marginLeft: "auto",
      
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
