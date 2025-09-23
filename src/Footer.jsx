import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 4,
        mt: "auto",
        background: "linear-gradient(90deg, #2b0a3d, #43125d)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ color: "#fff", mb: 2, fontFamily: "'Orbitron', sans-serif" }}>
        Follow Me
      </Typography>
      <Box>
        <IconButton href="https://github.com/" target="_blank" sx={{ color: "#fff", mx: 1, "&:hover": { color: "#a64dff" } }}>
          <GitHub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/" target="_blank" sx={{ color: "#fff", mx: 1, "&:hover": { color: "#a64dff" } }}>
          <LinkedIn />
        </IconButton>
        <IconButton href="https://twitter.com/" target="_blank" sx={{ color: "#fff", mx: 1, "&:hover": { color: "#a64dff" } }}>
          <Twitter />
        </IconButton>
        <IconButton href="https://www.instagram.com/" target="_blank" sx={{ color: "#fff", mx: 1, "&:hover": { color: "#a64dff" } }}>
          <Instagram />
        </IconButton>
      </Box>

      <Typography sx={{ color: "rgba(255,255,255,0.6)", mt: 2, fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Philip. All rights reserved.
      </Typography>
    </Box>
  );
}
