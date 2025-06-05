import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";

export default function Pagenavigation({ title, subheading }) {
  return (
    <Box
      sx={{
        px: "0px",
        py: "250px",
        backgroundColor: "#04000b",
        marginBottom: "40px",
        height: 100,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
        maxWidth="lg"
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#bbb",
            fontSize: "1.1rem",
            textAlign: "center",
          }}
        >
          Home / {subheading}
        </Typography>
      </Container>
    </Box>
  );
}
