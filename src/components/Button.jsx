import { Button, keyframes } from "@mui/material";

// Define the shake animation
const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-3px); }
  40% { transform: translateX(3px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(3px); }
  100% { transform: translateX(0); }
`;

const ShakeButton = ({ children, sx = {}, ...props }) => {
  return (
    <Button
      variant="text"
      color="primary"
      sx={{
        width: "35%",
        bgcolor: "#fff",
        color: "black",
        px: "16px",
        py: "7px",
        transition: "all 0.3s ease",
        "&:hover": {
          animation: `${shake} 0.5s`,
          backgroundColor: "#e09800",
        },
        ...sx, // allow passing custom sx props
      }}
      {...props} // allow passing other props like onClick
    >
      {children}
    </Button>
  );
};

export default ShakeButton;
