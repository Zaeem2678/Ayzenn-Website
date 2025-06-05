import { Box, Typography, Container } from "@mui/material";
import SkillProgressCircle from "../../components/homepage/SkillProgressCircle";
import CountUp from "react-countup";

export default function Services() {
  return (
    <Box sx={{ px: { xs: 2, md: "25px" }, py: { xs: 4, md: "100px" } }}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: "30px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            maxWidth: "100%",
          }}
          color="#FBA504"
        >
          --- - Our Services - ---
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "21px",
            fontWeight: "bold",
            mt: 2,
            maxWidth: { xs: "100%", sm: "90%", md: "700px" },
            textAlign: "center",
          }}
          color="initial"
        >
          We possess a diverse range of skills, including web development,
          mobile app development, AI/ML development, UI/UX design, and digital
          marketing.
        </Typography>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 7,
          py: 6,
          alignItems: "center",
          justifyContent: "center",
          mb: "150px",
        }}
      >
        {[
          {
            title: "Web App Development",
            icon: "https://cdn-icons-png.flaticon.com/512/6352/6352331.png",
            description:
              "We offer full-stack web development services for businesses of all sizes. Our solutions cover everything from engaging designs to smooth deployment. With our expertise, we build visually appealing and user-friendly websites. These enhance your brand's online presence and promote growth. Let us turn your vision into reality with our all-in-one web development services.",
          },
          {
            title: "Mobile App Development",
            icon: "https://cdn-icons-png.flaticon.com/512/5738/5738077.png",
            description:
              "Our mobile app development services help businesses create high-performance apps for Android. We focus on user-centric experiences and seamless interfaces that engage users. Whether you need a customer app or an internal tool, we ensure your mobile solution fits your needs. From concept to launch, we offer complete services that guarantee functionality.",
          },
          {
            title: "AI Development",
            icon: "https://static.vecteezy.com/system/resources/previews/029/272/387/non_2x/ai-for-development-icon-vector.jpg",
            description:
              "Share your business challenges and ideas, and we will create digital solutions. We aim to understand your needs and provide tailored solutions that improve your processes and boost success. Trust us to turn your concepts into effective solutions that increase efficiency and keep you competitive in the fast-changing digital landscape. You will surpass your own expectations.",
          },
          {
            title: "Management Systems",
            icon: "https://cdn-icons-png.freepik.com/512/2630/2630878.png",
            description:
              "We create management systems to simplify your business operations, like in hospitals and banks. Our solutions manage inventory, staff, performance tracking, and reporting. They boost productivity, cut down manual tasks, and offer real-time insights. This helps your organization run smoothly and efficiently.",
          },
          {
            title: "POS Systems",
            icon: "https://cdn-icons-png.flaticon.com/512/1610/1610437.png",
            description:
              "Our POS systems offer smooth sales and inventory management for retail and hospitality. We ensure your transactions process easily, along with real-time inventory tracking and reporting. This helps you meet your business demands. Whether you run a small store or a large retail chain, our POS systems are scalable, reliable, and user-friendly. They are essential tools for any modern business.",
          },
          {
            title: "School/College Portals",
            icon: "https://www.shutterstock.com/image-vector/student-portal-hand-drawn-vector-260nw-2164398885.jpg",
            description:
              "We build secure school and college portals that boost communication among students, parents, and faculty. Our portals include online attendance, grade tracking, assignment submission, and fee payment systems. These digital solutions make administration easier and improve the learning experience by providing access to academic resources and real-time updates.",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px",
              bgcolor: "#F6F4F9",
              borderRadius: "4px",
              boxShadow: 1,
              gap: "20px",
              width: "100%",
              maxWidth: "600px",
              mx: "auto",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: 6,
              },
              height: "100%",
              textAlign: "center",
            }}
          >
            <img
              style={{ width: "70px", height: "70px", objectFit: "contain" }}
              src={item.icon}
              alt=""
            />
            <Typography
              variant="h5"
              fontSize={"1.25rem"}
              fontWeight={700}
              color="initial"
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="#726D7B">
              {item.description}
            </Typography>
          </Box>
        ))}
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "60px",
          alignItems: "start",
          mb: "100px",
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
                objectFit: "cover",
              }}
              src="https://www.ayzenntechnologies.com/img/about.png"
              alt="About Us"
            />
          </Box>
        </Box>
      </Container>

      {/* Facts Section */}
      <Box
        sx={{
          bgcolor: "#1a1a1a",
          margin: 0,
          px: 3, // remove internal horizontal padding
          width: "100vw", // full viewport width
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              mb: "60px",
            }}
          >
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
              Transform your business with our comprehensive technology
              expertise.
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
                number: "3450",
                label: "Working Hours",
                color: "#FBA504",
              },
              {
                icon: "👥",
                number: "250",
                label: "Happy Clients",
                color: "#FBA504",
              },
              {
                icon: "👑",
                number: "15",
                label: "Awards Received",
                color: "#FBA504",
              },
              {
                icon: "✅",
                number: "347",
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
                  sx={{
                    fontSize: "40px",
                    color: item.color,
                    mb: "10px",
                  }}
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
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2.5} // animation duration in seconds
                    separator=","
                  />
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
    </Box>
  );
}
