import { Box, Typography, Container, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.querySelector("header"); // Navbar = <header>
    if (nav) {
      setNavHeight(nav.offsetHeight + 24); // include marginTop: 2 (~16px + spacing)
    }
  }, []);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(90deg,rgba(18, 0, 36, 1) 0%, rgba(79, 11, 87, 1) 65%, rgba(109, 24, 120, 1) 100%, rgba(189, 144, 214, 1) 0%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        pt: `${navHeight}px`, // ✅ pushes content below navbar
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
              mb: 3,
            }}
          >
            Hi! I'm Philip, a passionate developer specializing in building
            beautiful and functional web applications. Explore my projects and
            feel free to reach out!
          </Typography>

          {/* CV Download Button */}
          <Button
            variant="contained"
            color="secondary"
            href="/file/Khant Zin Hein.pdf" // ✅ served from /public/file
            download
            sx={{
              fontWeight: "bold",
              borderRadius: 2,
            }}
          >
            Download CV
          </Button>
        </Box>

        {/* Image on the right */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <img
            src="/image/image.jpg" // ✅ served from /public/image
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
