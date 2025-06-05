import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function SaaSDevelopment() {
  return (
    <>
      <Box
        sx={{
          padding: "60px",
        }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={6}
      >
        <Box flex={1} display="flex" flexDirection="column" gap={3}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "38px",
              fontWeight: "bold",
            }}
            color="initial"
          >
            Transform Your Business with Pakistan's Premier SaaS Development
            Company
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
            }}
            color="initial"
          >
            Supercharge your business with our SaaS solutions in Pakistan. With
            United Sol’s team of SaaS development experts, enjoy customised
            products which are aligned with your business objectives. Our SaaS
            solutions are not just any ordinary tools, but a bridge towards
            efficiency and unparalleled growth. Today’s business environment
            necessitates innovation and differentiation. We guarantee both. Join
            the SaaS revolution today.
          </Typography>

          <Button
            variant="contained"
            sx={{ width: "fit-content", bgcolor: "#7198CB", mt: "30px" }}
          >
            Request a Quote
          </Button>
        </Box>
        <Box flex={1}>
          <img
            src="https://www.unitedsol.net/wp-content/uploads/2023/12/Isolation_Modehero-image.png"
            alt="SaaS Development Banner"
            style={{ width: "100%", marginLeft: "40px", height: "auto" }}
          />
        </Box>
      </Box>
      {/* Meet United SOl */}
      <Box
        sx={{
          bgcolor: "#F4F6FD",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "32px",
            fontWeight: "bold",
          }}
          color="initial"
        >
          Meet United Sol - Your Trusted SaaS Partner
        </Typography>
        <Box marginBottom={"35px"}>
          <img
            src="https://www.unitedsol.net/wp-content/uploads/2021/04/after-tittle.png"
            alt=""
          />
        </Box>
        <Typography
          variant="body1"
          color="initial"
          maxWidth={"800px"}
          sx={{
            mb: "50px",
          }}
        >
          Experience SaaS excellence with United Sol, your trusted
          Pakistan-based SaaS development company. We understand that every
          business is faced with unique challenges. Rather than employing a one
          size fits all strategy, our SaaS team delves deep into understanding
          your requirements, allowing it to develop fully custom products. Our
          solutions a combination of innovation and creativity, giving your
          business the ability not just to exist but to excel.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "32px",
            fontWeight: "bold",
          }}
          color="initial"
        >
          Our SaaS Development Process
        </Typography>
        <Box marginBottom={"35px"}>
          <img
            src="https://www.unitedsol.net/wp-content/uploads/2021/04/after-tittle.png"
            alt=""
          />
        </Box>
        <Typography variant="body1" color="initial" mb={"40px"}>
          United Sol’s Proven SaaS App Development Approach
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)", // 2 per row on mobile
              md: "repeat(5, 1fr)", // 5 per row on desktop
            },
            gap: "30px",
          }}
        >
          {[
            {
              logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/process-icon-1.png",
              title: "Requirement Analysis and Design",
            },
            {
              logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/process-icon-2.png",
              title: "Prototyping and User Feedback",
            },
            {
              logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/process-icon-3.png",
              title: "Programming and Development",
            },
            {
              logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/process-icon-4.png",
              title: "Testing and Instant Refinement",
            },
            {
              logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/process-icon-5.png",
              title: "Deployment and Maintenance",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: "#fff",
                padding: "20px",
                boxShadow: 5,
                px: "10px",
                borderRadius: "4px",
              }}
            >
              <img src={item.logo} alt="" />
              <Typography
                variant="body1"
                fontWeight={"bold"}
                width={"200px"}
                color="initial"
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          variant="body1"
          color="initial"
          marginTop={"60px"}
          marginBottom={"50px"}
        >
          United Sol ensures high-quality, scalable, and user-friendly SaaS
          applications that meet your business needs.
        </Typography>
      </Box>
      {/*Services section*/}

      <Box
        sx={{
          bgcolor: "#fff",
          px: "40px",
          py: "80px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // stack on mobile
          alignItems: { xs: "center", md: "stretch" }, // center on mobile
        }}
      >
        <Box
          sx={{
            display: "flex",
            border: "2px solid #CAD7E9",
            borderRadius: "5px",
            position: "relative",
            bgcolor: "#F9F9F9",
            textAlign: "center",
            boxShadow: 3,
            overflow: "hidden",
            width: { xs: "100%", md: "fit-content" },
            flexDirection: { xs: "column", md: "row" }, // stack on mobile
            "::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "2px",
              height: "100%",
              backgroundColor: "#527AB5",
              zIndex: 1,
              display: { xs: "none", md: "block" }, // hide vertical line on mobile
            },
            "::before": {
              content: '""',
              position: "absolute",
              top: "calc(50% - 50px)",
              left: 0,
              width: "15px",
              height: "100px",
              backgroundColor: "#527AB5",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
              zIndex: 2,
              display: { xs: "none", md: "block" }, // hide on mobile
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: { xs: "100%", md: "40%" }, // full width on mobile
              bgcolor: "#F9F9F9",
              px: { xs: "20px", md: "40px" }, // less padding on mobile
              py: { xs: "40px", md: "90px" }, // less padding on mobile
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: { xs: "24px", md: "30px" }, // smaller on mobile
                fontWeight: "bold",
              }}
            >
              Our Success Stories
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
            >
              See Impactful SaaS Projects by United Sol.
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
            >
              Experience user-friendly design, robust functionality, and
              seamless integration in action.
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#fff",
              width: { xs: "100%", md: "60%" }, // full width on mobile
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: { xs: 3, md: 0 }, // vertical padding on mobile
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
                gap: { xs: 3, md: "40px" },
                flexDirection: { xs: "column", md: "row" }, // stack cards on mobile
                width: "100%",
                maxWidth: 600,
              }}
            >
              {[
                {
                  logo: "https://www.unitedsol.net/wp-content/uploads/2021/02/SmileyApp.png",
                  title: "Smiley",
                  points: [
                    "Gauge Customer Sentiment",
                    "Measure satisfaction in real time",
                  ],
                },
                {
                  logo: "https://www.unitedsol.net/wp-content/uploads/2021/02/onTrack-Logo.png",
                  title: "Ontrack",
                  points: [
                    "Empowering Delivery Management",
                    "Enhance customer satisfaction",
                  ],
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "100%", md: "280px" }, // full width cards on mobile
                    height: "250px",
                    boxShadow: 4,
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    mb: { xs: 4, md: 0 }, // margin bottom between stacked cards on mobile
                  }}
                >
                  {/* Content container */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.logo}
                        alt=""
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "contain",
                        }} // same fixed size
                      />
                      <Typography
                        variant="h6"
                        color="#005389"
                        sx={{
                          fontWeight: "bold",
                          margin: 0,
                          fontSize: "22px",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>

                    <List dense sx={{ mt: 1 }}>
                      {item.points.map((point, idx) => (
                        <ListItem key={idx} sx={{ pl: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30, color: "#005389" }}>
                            <CheckCircleIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            sx={{
                              margin: "0",
                            }}
                            primary={point}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "28px", md: "32px" },
            fontWeight: "bold",
          }}
          color="initial"
        >
          Saas Development Services We Offer
        </Typography>
        <Box
          sx={{
            mb: "20px",
          }}
        >
          <img
            src="https://www.unitedsol.net/wp-content/uploads/2021/04/after-tittle.png"
            alt=""
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            width: { xs: "550px", md: "850px" },
          }}
          mb={"70px"}
          color="initial"
        >
          Welcome to our SaaS product development hub, where innovation meets
          excellence. We are a seasoned SaaS development agency, specializing in
          crafting user-friendly, innovative solutions from conceptualization to
          deployment.
        </Typography>
      </Box>
      <Box
        sx={{
          px: "80px",
          gap: "40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
          mb: "140px",
        }}
      >
        {[
          {
            logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/icon-1.png",
            title: "SaaS Application Development",
            description:
              "Join forces with United Sol today for unparalleled expertise in SaaS app development. Our accomplished team excels at creating scalable, feature-rich applications that drive innovation and elevate user experiences. We know how to turn your visionary ideas into high-performing SaaS applications that stand out and deliver business value.",
            bgcolor: "#FAFFF8",
          },
          {
            logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/icon-2.png",
            title: "SaaS Platform Development",
            description:
              "Experience future-proof, user-friendly platforms with our experienced SaaS platform developers. Leveraging cutting-edge cloud technology, we focus on delivering high-quality solutions that align with your business objectives, ensuring you stay ahead of the curve. Our emphasis on scalability and performance guarantees your success.",
            bgcolor: "#FFFBF9",
          },
          {
            logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/icon-3.png",
            title: "SaaS Web Development",
            description:
              "In a rapidly evolving tech landscape, trust our experienced team for SaaS web development. We specialize in modern web technologies, including serverless architectures, microservices, and containerization. Our scalable solutions effortlessly handle high user loads and complex workflows, ensuring seamless business operations.",
            bgcolor: "#FEF8FF",
          },
          {
            logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/icon-4.png",
            title: "SaaS Development Consulting",
            description:
              "Navigating the SaaS landscape is complex, but our specialized consulting services simplify the journey. We guide you through selecting the ideal SaaS solution for your business needs and developing effective implementation strategies. With us, success in the SaaS arena becomes attainable and drives unprecedented business growth.",
            bgcolor: "#F9FAFF",
          },
          {
            logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/icon-5.png",
            title: "SaaS Maintenance and Support",
            description:
              "Our SaaS maintenance and support services ensure your application’s ongoing success. Clients rely on our responsive support and dependable maintenance, allowing you to focus on your core business activities. With frequent, bug-free updates that incorporate the latest trends and technologies, stay one step ahead of your competitors.",
            bgcolor: "#F4FFFF",
          },
          {
            logo: "https://www.unitedsol.net/wp-content/uploads/2023/12/icon-6.png",
            title: "SaaS Cloud Migration",
            description:
              "Experience seamless cloud migration that enhances scalability, flexibility, and performance with our seasoned SaaS developers. We minimize downtime and data loss during the migration process, empowering your application with the benefits of cloud computing. No need to worry about data breaches or leaks at any stage of the process.",
            bgcolor: "#F5FBFF",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: item.bgcolor,
              width: "420px",
              padding: "30px",
              border: "1px solid #D3FFC2",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            <img src={item.logo} alt="" />
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Typography>
            <Typography fontSize={"18px"} variant="body1" color="initial">
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          background: "linear-gradient(to bottom, #FFFFFF, #F4F6FD)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "bold",
            mb: "10px",
          }}
          variant="body1"
          color="initial"
        >
          Benefits of SaaS
        </Typography>
        <img
          style={{ marginBottom: "25px" }}
          src="https://www.unitedsol.net/wp-content/uploads/2021/04/after-tittle.png"
          alt=""
        />
        <Typography
          variant="body1"
          marginBottom={"80px"}
          fontSize={"19px"}
          sx={{
            width: { xs: "550px", md: "850px" },
          }}
          color="initial"
        >
          Discover the transformative power of SaaS, ideal for businesses
          seeking operational efficiency, productivity, and strategic success.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
            mb: "170px",
          }}
        >
          {[
            {
              title: "Reduced IT Costs",
              desc: "Eliminate infrastructure and staffing costs, lowering expenses.",
            },
            {
              title: "Increased Agility",
              desc: "Adapt to market changes and user needs with frequent updates.",
            },
            {
              title: "Improved Collaboration",
              desc: "Enhance team productivity with built-in collaboration tools.",
            },
            {
              title: "Enhanced Security",
              desc: "Secure data with robust security measures, encryption, and 2FA.",
            },
            {
              title: "Simplified Integrations",
              desc: "Easy integration with other in-house and cloud-based services.",
            },
            {
              title: "Data-Driven Insights",
              desc: "Gain valuable insights from data with fully personalized analytics.",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                bgcolor: "#fff",
                padding: "30px",
                py: "60px",
                boxShadow: "4",
                borderRadius: "6px",
              }}
            >
              <Typography
                fontSize={"25px"}
                fontWeight={"bold"}
                variant="body1"
                color="initial"
              >
                {item.title}
              </Typography>
              <Typography width={"350px"} variant="body1" color="initial">
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "24px", md: "32px" }, // smaller on mobile
            fontWeight: "bold",
            mb: "10px",
          }}
          color="initial"
        >
          FAQs
        </Typography>
        <img
          src="https://www.unitedsol.net/wp-content/uploads/2021/04/after-tittle.png"
          style={{ marginBottom: "60px" }}
          alt=""
        />
        <Typography
          fontSize={"20px"}
          sx={{
            mb: "59px",
          }}
          variant="body1"
          color="initial"
        >
          Got Questions About SaaS
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            paddingLeft: "70px",
            width: "70%",
            marginBottom: "70px",
          }}
        >
          {/* Column 1 (2 rows) */}
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}
          >
            {[
              "Is SaaS data secure in the cloud?",
              "Do your SaaS solutions integrate with other platforms/apps?",
            ].map((question, index) => (
              <Accordion
                key={index}
                sx={{
                  boxShadow: "none",
                  border: "1px solid #E0E0E0",
                  borderRadius: "4px",
                  padding: "10px",
                  backgroundColor: "#fff",
                  textAlign: "left",
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ color: "#004080" }} />}
                  aria-controls={`panel1-${index}-content`}
                  id={`panel1-${index}-header`}
                >
                  <Typography sx={{ fontWeight: 600, color: "#004080" }}>
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    This is a placeholder answer for: "{question}".
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* Column 2 (3 rows) */}
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}
          >
            {[
              "What type of support is included in your SaaS plan?",
              "What security measures do you take to protect our data?",
              "What are some examples of SaaS applications?",
            ].map((question, index) => (
              <Accordion
                key={index}
                sx={{
                  boxShadow: "none",
                  padding: "10px",
                  border: "1px solid #E0E0E0",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  textAlign: "left",
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ color: "#004080" }} />}
                  aria-controls={`panel2-${index}-content`}
                  id={`panel2-${index}-header`}
                >
                  <Typography sx={{ fontWeight: 600, color: "#004080" }}>
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    This is a placeholder answer for: "{question}".
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
