import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { Box } from "@mui/material";

function App() {
  return (
    <Router>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <AppRoutes />
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
