import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import ShakeButton from "../Button";

export default function () {
  return (
    <Box
      sx={{
        px: "0px",
        py: "250px",
        backgroundColor: "#04000b",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: "70px",
        }}
        maxWidth="lg"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "start" },
            gap: "30px",
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            color="#fba504"
            sx={{
              animation: "glowText 6s infinite alternate",
              fontWeight: "bold",
            }}
          >
            Transform Your Vision with Next-Gen Tech Solutions
          </Typography>
          <Typography variant="h7" color="#fff">
            Leading the Charge in AI, Web, Mobile, and Custom Solutions
          </Typography>
          <ShakeButton>Get Started</ShakeButton>
        </Box>
        <Box
          sx={{
            width: { xs: "500px", md: "650px" },
            display: "flex",
            animation: "float 4s ease-in-out infinite",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.ayzenntechnologies.com/img/hero.png"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
