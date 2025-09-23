import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";


const navItems = ["Home", "Services", "My Projects"];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg,rgba(18, 0, 36, 1) 0%, rgba(79, 11, 87, 1) 65%, rgba(109, 24, 120, 1) 100%, rgba(189, 144, 214, 1) 0%)", 
        padding: 0,
        position: "fixed",
        borderRadius: 12,
        marginTop: 2,
        width: "90%",
        left: "50%",
        transform: "translateX(-50%)",
        // boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
        zIndex: 1000,
        

      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Typography
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#e0b3ff",
            cursor: "pointer",
          }}
        >
          MyPortfolio
        </Typography>

  {/* Desktop Links */}
{!isMobile && (
  <Box sx={{ display: "flex", gap: 3 }}>
    {navItems.map((item) => (
      <Button
        key={item}
        component={ScrollLink}          // ✅ ScrollLink as component
        to={item.toLowerCase().replace(" ", "")}
        smooth={true}
        duration={200}
        offset={-70}
        spy={true}
        activeClass="active-link"
        sx={{
          color: "rgba(255,255,255,0.7)",
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 400,
          position: "relative",
          "&:hover": { color: "#fff" },
          "&.active-link": {           // ✅ active style when in view
            color: "#fff",
            fontWeight: "bold",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "50%",
              height: "2px",
              backgroundColor: "#d76bff",
              borderRadius: "2px",
            },
          },
        }}
      >
        {item}
      </Button>
    ))}
  </Box>
)}

{/* Desktop Contact Button */}
{!isMobile && (
  <Button
    component={ScrollLink}
    to="contact"
    smooth={true}
    duration={600}
    offset={-70}
    spy={true}
    activeClass="active-link"
    sx={{
    background: "#9D00A6",
      color: "#fff",
      fontWeight: "bold",
      borderRadius: "30px",
      paddingX: 3,
      textTransform: "none",
      fontFamily: "'Orbitron', sans-serif",
      "&:hover": {
        background: "linear-gradient(90deg, #8c3fe0, #c056f0)",
      },
      "&.active-link": {  // active when in view
        boxShadow: "0 0 5px #d76bff",
      },
    }}
  >
    Contact
  </Button>
)}

   {/* Hamburger Icon for Mobile */}
{isMobile && (
  <>
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={() => setDrawerOpen(true)}
      sx={{ ml: 1 }}
    >
      <MenuIcon />
    </IconButton>
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{
        sx: {
          background: "linear-gradient(90deg, #2b0a3d, #43125d)",
          color: "#fff",
          minWidth: 200,
        },
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={ScrollLink}
              to={item.toLowerCase().replace(" ", "")}
              smooth={true}
              duration={600}
              offset={-70}
              spy={true}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    color: "#fff",
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: 400,
                    "&:hover": { color: "#fff" },
                    
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Contact Button */}
        <ListItem>
          <ListItemButton
            component={ScrollLink}
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={() => setDrawerOpen(false)}
            sx={{
              background: "linear-gradient(90deg, #a64dff, #d76bff)",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "30px",
              textTransform: "none",
              fontFamily: "'Orbitron', sans-serif",
              justifyContent: "center",
              "&:hover": {
                background: "linear-gradient(90deg, #8c3fe0, #c056f0)",
              },
            }}
          >
            Contact
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  </>
)}


      </Toolbar>
    </AppBar>
  );
}