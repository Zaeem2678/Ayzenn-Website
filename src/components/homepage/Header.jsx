import Container from "@mui/material/Container";
import { Box, GlobalStyles, Typography } from "@mui/material";
import ShakeButton from "../Button";
import { Typewriter } from "react-simple-typewriter";
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
          <Typography variant="h4" color="#fba504" fontWeight="bold">
            <Typewriter
              words={["Transform Your Vision with Next-Gen Tech Solutions"]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={60}
              deleteSpeed={0}
              delaySpeed={2000}
            />
          </Typography>
          <Typography variant="h7" color="#fff">
            Leading the Charge in AI, Web, Mobile, and Custom Solutions
          </Typography>
          <ShakeButton>Get Started</ShakeButton>
        </Box>
        <>
          <GlobalStyles
            styles={`
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    `}
          />

          <Box
            sx={{
              width: "100%", // let it fill the screen width
              maxWidth: { xs: "100%", md: "650px" }, // restrict on large screens
              display: "flex",
              animation: "float 4s ease-in-out infinite",
              justifyContent: "center",
              alignItems: "center",
              px: 2, // optional: small horizontal padding
            }}
          >
            <img
              src="https://www.ayzenntechnologies.com/img/hero.png"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </>
      </Container>
    </Box>
  );
}
