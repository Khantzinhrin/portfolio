import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink; // Opens default mail client
  };

  return (
    <Box
      id="contact"
      sx={{
        width: "100%",
        maxHeight: "80vh",
        py: 8,
        background:
          "linear-gradient(90deg,rgba(18, 0, 36, 1) 0%, rgba(79, 11, 87, 1) 65%, rgba(109, 24, 120, 1) 100%, rgba(189, 144, 214, 1) 0%)",
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
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          maxWidth: "500px",
          zIndex: 1,
        }}
      >
        <TextField
          name="name"
          label="Name"
          fullWidth
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          sx={{ background: "#2b0a3d", borderRadius: 1, input: { color: "#fff" } }}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          sx={{ background: "#2b0a3d", borderRadius: 1, input: { color: "#fff" } }}
        />
       <TextField
  name="message"
  label="Message"
  multiline
  rows={4}
  fullWidth
  variant="outlined"
  value={formData.message}
  onChange={handleChange}
  sx={{
    background: "#2b0a3d",
    borderRadius: 1,
    "& .MuiInputBase-input": { color: "#fff" },           // for normal input
    "& .MuiInputBase-inputMultiline": { color: "#fff" },  // for textarea
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#5c0abb" }, // optional border color
  }}
/>


        <Button
          type="submit"
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
