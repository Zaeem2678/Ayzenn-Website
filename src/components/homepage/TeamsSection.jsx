import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const teamMembers = [
  {
    name: "Umair Arshad",
    role: "CEO",
    image: "https://www.ayzenntechnologies.com/img/umair.jpg",
    linkedin: "#",
  },
  {
    name: "Tahir Saeed",
    role: "CTO",
    image: "https://www.ayzenntechnologies.com/img/tahir.jpg",
    linkedin: "#",
  },
  {
    name: "Shair Ali",
    role: "Project Manager",
    image: "https://www.ayzenntechnologies.com/img/shairAli.jpg",
    linkedin: "#",
  },
];

const TeamsSection = () => {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#fff", textAlign: "center" }}>
      <Typography variant="h6" sx={{ color: "#FFA500", fontWeight: "bold" }}>
        — OUR TEAM —
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Our Team Members
      </Typography>

      <Box
        sx={{
          display: "grid",
          px: { xs: 2, md: 8 },
          gridTemplateColumns: {
            xs: "1fr", // 1 column on mobile
            md: "repeat(3, 1fr)", // 3 columns on desktop
          },
          marginX: "100px",
          gap: 0,
          justifyContent: "center",
        }}
      >
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            elevation={3}
            sx={{
              borderRadius: 3,
              paddingY: "20px",
              paddingX: "60px",

              maxWidth: 360,
              mx: "auto", // centers card
            }}
          >
            <Avatar
              src={member.image}
              alt={member.name}
              sx={{ width: 200, height: 200, mx: "auto", mb: 2 }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h6" align="center">
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                {member.role}
              </Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                <IconButton
                  href={member.linkedin}
                  target="_blank"
                  sx={{
                    border: "1px solid #ccc",
                    backgroundColor: "#f1f1f1",
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TeamsSection;
