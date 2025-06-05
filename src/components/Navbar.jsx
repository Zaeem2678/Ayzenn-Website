import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ShakeButton from "./Button";
const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "black" }} elevation={2}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Box>
          <Link to="/">
            <img
              src="https://www.ayzenntechnologies.com/img/ayzen.png"
              alt="Logo"
              height="40"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Box>

        {/* Center: Menu Links (Desktop) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {menuItems.map(({ label, path }) => (
            <Button
              key={path}
              component={Link}
              to={path}
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1.05rem",
                transition: "color 0.3s",
                "&:hover": {
                  color: "#FBA504",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
        {/* Right: Get Started Button */}
        <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
          <ShakeButton
            sx={{
              width: "100%",
              borderRadius: "30px",
            }}
          >
            Get Started
          </ShakeButton>
        </Box>
        {/* Right: Mobile Menu Icon */}
        <IconButton
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Menu
          </Typography>
          <List>
            {menuItems.map(({ label, path }) => (
              <ListItem
                button
                key={path}
                component={Link}
                to={path}
                onClick={toggleDrawer(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography fontSize="1.05rem" fontWeight="500">
                      {label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
