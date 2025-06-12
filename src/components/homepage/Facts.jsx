import CountUp from "react-countup";
import { Box, Typography, Container } from "@mui/material";
import { useInView } from "react-intersection-observer";

export default function Facts() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: "#1a1a1a",
        px: 3,
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: "60px" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#FBA504",
              fontWeight: "bold",
              textTransform: "uppercase",
              mb: "20px",
            }}
          >
            --- - FACTS - ---
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
            }}
          >
            Transform your business with our comprehensive technology expertise.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "1fr 1fr 1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[
            {
              icon: "⭐",
              number: 3450,
              label: "Working Hours",
              color: "#FBA504",
            },
            {
              icon: "👥",
              number: 250,
              label: "Happy Clients",
              color: "#FBA504",
            },
            {
              icon: "👑",
              number: 15,
              label: "Awards Received",
              color: "#FBA504",
            },
            {
              icon: "✅",
              number: 347,
              label: "Complete Projects",
              color: "#FBA504",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "40px", color: item.color, mb: "10px" }}
              >
                {item.icon}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "36px", sm: "48px", md: "56px" },
                  lineHeight: 1,
                  mb: "8px",
                }}
              >
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2.5}
                    separator=","
                  />
                ) : (
                  0
                )}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
