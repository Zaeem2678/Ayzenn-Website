import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#222", color: "#eee", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Ayzenn Technologies
            </Typography>
            <Typography variant="body2" color="grey.400">
              Delivering innovative solutions for your digital needs. We help
              your business grow online with expert design and development.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="grey.400">
              1234 Street Name <br />
              City, State, 12345
            </Typography>
            <Typography variant="body2" color="grey.400" mt={1}>
              Email: info@yourcompany.com
            </Typography>
            <Typography variant="body2" color="grey.400">
              Phone: +1 (555) 123-4567
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "inherit" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "inherit" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "inherit" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "inherit" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box mt={6} textAlign="center" color="grey.600" fontSize="0.875rem">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
}
