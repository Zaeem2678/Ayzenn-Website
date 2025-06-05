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
              sx={{ color: "white", textTransform: "none" }}
            >
              {label}
            </Button>
          ))}
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
          {menuItems.map(({ label, path }) => (
            <ListItem
              button
              key={path}
              component={Link}
              to={path}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
