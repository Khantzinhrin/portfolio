import { Box, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        width: "100%",
        maxHeight: "80vh",
        py: 8,
        background: "linear-gradient(90deg,rgba(18, 0, 36, 1) 0%, rgba(79, 11, 87, 1) 65%, rgba(109, 24, 120, 1) 100%, rgba(189, 144, 214, 1) 0%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        Contact Me
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          maxWidth: "500px",
          zIndex: 1,
        }}
      >
        <TextField label="Name" fullWidth variant="outlined" sx={{ background: "#2b0a3d", borderRadius: 1, input: { color: "#fff" } }} />
        <TextField label="Email" type="email" fullWidth variant="outlined" sx={{ background: "#2b0a3d", borderRadius: 1, input: { color: "#fff" } }} />
        <TextField label="Message" multiline rows={4} fullWidth variant="outlined" sx={{ background: "#2b0a3d", borderRadius: 1, input: { color: "#fff" } }} />

        <Button
          sx={{
            background: "linear-gradient(135deg, #5c0abb, #a64dff)",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "30px",
            textTransform: "none",
            py: 1.5,
            "&:hover": {
              background: "linear-gradient(135deg, #3f0080, #8c3fe0)",
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
