import { Box, Typography, Container } from "@mui/material";
import Pagenavigation from "../components/pagenavigation/pagenavigation";
import SkillProgressCircle from "../components/homepage/SkillProgressCircle";

export default function About() {
  return (
    <>
      <Pagenavigation title={"About Us"} subheading={"About Us"} />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "60px",
          alignItems: "start",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            color="#FBA52C"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              mb: "20px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            --- - About Us - ---
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: "40px",
              fontSize: { xs: "28px", sm: "32px", md: "37px" },
              textAlign: { xs: "center", md: "left" },
            }}
            color="initial"
          >
            We make creativity work for your brand!
          </Typography>
          <Typography
            variant="body2"
            color="#726D7B"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Ours is a team of creatives that is brainstorming on great ideas,
            all. the. time. With our skills put together, you get an ensemble
            capable of doing anything and everything your brand needs.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "1fr 1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 4,
            }}
          >
            <SkillProgressCircle value={85} label="AI Development" />
            <SkillProgressCircle value={90} label="Mobile App Development" />
            <SkillProgressCircle value={95} label="Website Development" />
            <SkillProgressCircle value={95} label="POS Systems" />
            <SkillProgressCircle value={90} label="School/College Portals" />
            <SkillProgressCircle value={90} label="Management Systems" />
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // or "contain" if you want the whole image visible
              }}
              src="https://www.ayzenntechnologies.com/img/about.png"
              alt="About Us"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}
