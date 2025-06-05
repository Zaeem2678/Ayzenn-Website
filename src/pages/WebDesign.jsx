import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";
import cardData from "../data/cardData";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const websiteCardContent = [
  {
    id: 1,
    image:
      "https://www.unitedsol.net/wp-content/uploads/2021/04/web-design.png",
    title: "Custom Website Development",
    description:
      "United Sol offers bespoke web design and development services tailored for each individual business and its needs. An interactive and captivating design and a feature-rich website result in brand exposure and increased revenue.",
    features: [
      "Custom UI and UX designs.",
      "Custom Website and Web App Development",
      "Seamless third-party integrations.",
      "Continuous support and maintenance.",
    ],
  },
  {
    id: 2,
    image: "https://www.unitedsol.net/wp-content/uploads/2021/04/wordpress.png",
    title: "Custom Website Development",
    description:
      "United Sol offers bespoke web design and development services tailored for each individual business and its needs. An interactive and captivating design and a feature-rich website result in brand exposure and increased revenue.",
    features: [
      "Custom UI and UX designs.",
      "Custom Website and Web App Development",
      "Seamless third-party integrations.",
      "Continuous support and maintenance.",
    ],
  },
  {
    id: 3,
    image: "https://www.unitedsol.net/wp-content/uploads/2021/04/magento.png",
    title: "Custom Website Development",
    description:
      "United Sol offers bespoke web design and development services tailored for each individual business and its needs. An interactive and captivating design and a feature-rich website result in brand exposure and increased revenue.",
    features: [
      "Custom UI and UX designs.",
      "Custom Website and Web App Development",
      "Seamless third-party integrations.",
      "Continuous support and maintenance.",
    ],
  },
  {
    id: 4,
    image:
      "https://www.unitedsol.net/wp-content/uploads/2021/05/prestashop-1.png",
    title: "Custom Website Development",
    description:
      "United Sol offers bespoke web design and development services tailored for each individual business and its needs. An interactive and captivating design and a feature-rich website result in brand exposure and increased revenue.",
    features: [
      "Custom UI and UX designs.",
      "Custom Website and Web App Development",
      "Seamless third-party integrations.",
      "Continuous support and maintenance.",
    ],
  },
  {
    id: 5,
    image: "https://www.unitedsol.net/wp-content/uploads/2021/05/opencart.png",
    title: "Custom Website Development",
    description:
      "United Sol offers bespoke web design and development services tailored for each individual business and its needs. An interactive and captivating design and a feature-rich website result in brand exposure and increased revenue.",
    features: [
      "Custom UI and UX designs.",
      "Custom Website and Web App Development",
      "Seamless third-party integrations.",
      "Continuous support and maintenance.",
    ],
  },
  {
    id: 6,
    image: "https://www.unitedsol.net/wp-content/uploads/2021/05/shopify-1.png",
    title: "Custom Website Development",
    description:
      "United Sol offers bespoke web design and development services tailored for each individual business and its needs. An interactive and captivating design and a feature-rich website result in brand exposure and increased revenue.",
    features: [
      "Custom UI and UX designs.",
      "Custom Website and Web App Development",
      "Seamless third-party integrations.",
      "Continuous support and maintenance.",
    ],
  },
];

export default function WebDesign() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        padding="70px"
        gap="40px"
      >
        {/* Left Side Content */}
        <Box flex={1} display="flex" flexDirection="column" gap="22px">
          <Typography
            variant="h2"
            sx={{ fontSize: "38px", fontWeight: "bold" }}
            color="initial"
          >
            Website Design and Development Services
          </Typography>

          <Typography
            sx={{ fontSize: "16px", fontWeight: "500", lineHeight: 1.7 }}
            color="initial"
          >
            A great website is the foundation of your online presence. Our
            expert designers craft visually stunning and user-friendly websites
            that not only reflect your brand identity but also drive
            conversions.
          </Typography>

          <Typography variant="h6" fontWeight="bold" color="initial">
            Why Choose Our Web Design Services?
          </Typography>

          <List sx={{ padding: 0 }}>
            {[
              "Responsive design for all devices",
              "SEO-friendly structure",
              "User-focused UI/UX",
              "Fast loading and optimized code",
              "Brand-consistent visual elements",
              "Conversion-optimized layout",
            ].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemIcon sx={{ minWidth: "30px", color: "primary.main" }}>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Button
            onClick={() => navigate("/get-a-quote")}
            variant="contained"
            sx={{
              width: "35%",
              marginTop: "20px",
              bgcolor: "#527AB5",
            }}
          >
            Request a Quote
          </Button>
        </Box>

        {/* Right Side Image */}
        <Box flex={1}>
          <img
            src="https://www.unitedsol.net/wp-content/uploads/2021/05/web-design-banner.png"
            alt="Web Design Banner"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        bgcolor={"#F4F6FD"}
        gap={"70px"}
        minHeight={"360px"}
        alignItems={"center"}
        flexDirection={{ xs: "column", md: "row" }}
        padding={"80px"}
      >
        <Box
          sx={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "30px", fontWeight: "bold" }}
            color="initial"
          >
            Why do you need a great looking website?
          </Typography>
          <Typography variant="body1" color="initial">
            Most people search about a brand or business online and this online
            presence builds the credibility of the brand and its existence.
            Therefore, having a website is essential.
          </Typography>
        </Box>
        <Box
          color={"#FFFFFF"}
          sx={{
            borderRadius: "30px",
            bgcolor: "white",
            maxWidth: "600px",
            padding: "40px",
            minHeight: "300px",
            borderLeft: "6px solid #7198CB",
            alignContent: "center",
          }}
        >
          <Typography variant="body1" color="initial">
            To leave an impact on your visitors and encourage them to buy your
            products you need to offer a quality User Experience to the
            visitors. United Sol is an Award-winning Web Design and development
            agency focused on designing websites that communicate with visitors
            and help navigate in the right direction.
          </Typography>
        </Box>
      </Box>

      <Box
        textAlign={{ xs: "left", md: "center" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "50px",
          bgcolor: "#fff",
          flexGrow: "1",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "30px", fontWeight: "bold" }}
          color="initial"
        >
          What Sets Us Apart
        </Typography>
        <Box marginBottom={"17px"}>
          <img
            src="https://www.unitedsol.net/wp-content/uploads/2021/04/after-tittle.png"
            alt=""
          />
        </Box>
        <Typography
          variant="body1"
          fontSize={"22px"}
          sx={{
            fontWeight: "600",
            marginBottom: "17px",
          }}
          color="initial"
        >
          Mastery in creating quality custom websites with latest tools and
          technologies!
        </Typography>
        <Typography variant="body1" color="lightblack">
          United Sol has always been at the forefront for helping our clients to
          stand out among the competitors. Our company has mastery in creating
          qualitative custom websites by using the latest technologies. Our team
          experts understand the importance of engaging the target audience. As
          Pakistan’s best web development company, we offer highly competitive
          and great web services with best price rates.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "35px",
            justifyContent: "center",
            gap: 6, // spacing between cards
            textAlign: "center",
          }}
        >
          {cardData.map((item, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: "100%", md: "48%" }, // full width on mobile, 2 cards per row on md+
                bgcolor: "#fff",
                borderRadius: "12px",
                padding: 2,
                boxShadow: 3,
                p: "40px",
                minHeight: "350px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box alignItems={"center"} justifyContent={"center"}>
                  <img src={item.image} alt="" />
                </Box>
                <Typography
                  variant="h2"
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                  color="initial"
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" color="initial">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: "50px",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#F4F6FD",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "30px", fontWeight: "bold" }}
          color="initial"
        >
          Website Design & Development Services
        </Typography>
        <Box
          sx={{
            mb: "40px",
          }}
        >
          <img
            src="https://www.unitedsol.net/wp-content/uploads/2021/04/after-tittle.png"
            alt=""
          />
        </Box>
        <Box display="flex" flexDirection="column" gap="30px">
          {websiteCardContent.map((card, index) => {
            const isImageRight = index % 2 === 1;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: isImageRight ? "row-reverse" : "row",
                  },
                }}
              >
                {/* Image Box */}
                <Box
                  sx={{
                    position: "relative",
                    bgcolor: "#F9F9F9",
                    textAlign: "center",
                    py: "50px",
                    px: "120px",
                    borderRadius: "5px",
                    boxShadow: 3,
                    overflow: "hidden",
                    width: { xs: "100%", md: "fit-content" },
                    "::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "2px",
                      height: "100%",
                      backgroundColor: "#527AB5",
                      zIndex: 1,
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
                    },
                  }}
                >
                  <img
                    style={{ marginBottom: "20px" }}
                    src={card.image}
                    alt=""
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      width: "250px",
                    }}
                  >
                    {card.title}
                  </Typography>
                </Box>

                {/* Content Box */}
                <Box
                  sx={{
                    padding: "40px",
                    bgcolor: "#fff",
                    width: { xs: "100%", md: "68%" },
                    borderRadius: "5px",
                    boxShadow: 3,
                  }}
                >
                  <Typography variant="body1" color="initial" sx={{ mb: 2 }}>
                    {card.description}
                  </Typography>
                  <List sx={{ mb: 2 }}>
                    {card.features.map((text, i) => (
                      <ListItem
                        key={i}
                        disableGutters
                        sx={{ ml: "30px", mb: 0, pb: 0 }}
                      >
                        <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                          <CircleIcon sx={{ fontSize: 12, color: "#7198CB" }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ margin: 0, mb: "4px" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Box
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/get-a-quote")}
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography color="#527AB5" fontWeight="500">
                      Get A Quote For Your Business Website
                    </Typography>
                    <ArrowRightAltIcon sx={{ color: "#7198CB" }} />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      {/*Our Affiliations*/}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          bgcolor: "#fff",
          padding: "60px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "30px", fontWeight: "bold", textAlign: "center " }}
          color="initial"
        >
          Our Affiliations
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            mb: "60px",
          }}
        >
          <img
            src="https://www.unitedsol.net/wp-content/uploads/2021/04/after-tittle.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            mb: "60px",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: "30px",
            overflowX: { xs: "auto", md: "visible" },
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar on mobile
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {[
            "https://www.unitedsol.net/wp-content/uploads/2021/04/pasha-1.png",
            "https://www.unitedsol.net/wp-content/uploads/2021/05/logo-pseb.png",
            "https://www.unitedsol.net/wp-content/uploads/2021/05/SECP_logo_new.png",
            "https://www.unitedsol.net/wp-content/uploads/2021/05/EOBI-1024x1024.jpg",
            "https://www.unitedsol.net/wp-content/uploads/2021/05/icci-logo.png",
          ].map((item, i) => (
            <Box
              sx={{
                px: "30px",
                py: "20px",
                boxShadow: 3,
                alignContent: "center",
              }}
              key={i}
            >
              <img src={item} width={"100px"} alt="" />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
