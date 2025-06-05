import { Box, Container, Typography } from "@mui/material";
import Pagenavigation from "../components/pagenavigation/pagenavigation";

export default function Services() {
  return (
    <>
      <Pagenavigation title={"Services"} subheading={"Services"} />
      <Box sx={{ px: { xs: 2, md: "25px" }, py: { xs: 4, md: "26px" } }}>
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
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "contain",
                }}
                src={item.icon}
                alt={item.title}
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
      </Box>
    </>
  );
}
