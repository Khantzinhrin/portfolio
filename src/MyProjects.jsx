import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";

export default function MyProjects() {
  const projects = [
    {
      name: "Car Renting System",
      desc: "A car renting platform with booking, payment, and user management.Mainly use JAVA for backend , MySQL for database and SCENE Builder for Frontend.",
      image: "/image/car.png",
      link: "https://github.com/Khantzinhrin/Car_renting",
    },
    {
      name: "Tic Tac Toe Game",
      desc: "Classic Tic Tac Toe game built with Java and Old JFrame",
      image: "/image/tictactoe.png",
      link: "https://github.com/Khantzinhrin/TicTacToe",
    },
    {
        name:"Method Flow",
        desc:"A web application that allows users to create, manage, and visualize workflows using a drag-and-drop interface.Build mainly with PHP and MySQL.FrontEnd with HTMl,CSS and JavaScript and Tailwindcss.",
        image:"/image/methodflow.png",
        link:"https://github.com/TripponDaellam/PHP-Project"

    },
    {
        name:"Travelling Website",
        desc:"A responsive travel website built with HTML, TAILWINDCSS, JavaScript , PHP and SQL. It features a modern design, interactive elements, and smooth animations to enhance user experience and still in process.",
        image:"/image/travelling.png",
        link:"#"
    }
  ];
  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        px: 2,
        background: "linear-gradient(90deg, rgba(18,0,36,1) 0%, rgba(79,11,87,1) 65%, rgba(109,24,120,1) 100%, rgba(189,144,214,1) 0%)",
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
        My Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // column on small, row on medium+
          gap: 4,
          justifyContent: "center",
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.name}
            sx={{
              flex: 1,
              maxWidth: 400,
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              background: "linear-gradient(135deg, #2b0a3d, #43125d)",
              color: "#fff",
            }}
          >
            {project.image && (
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.name}
                sx={{ objectFit: "cover" }}
              />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {project.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                {project.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href={project.link}
                target="_blank"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": { color: "#a64dff" },
                }}
              >
                View on GitHub
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
