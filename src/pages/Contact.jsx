import Pagenavigation from "../components/pagenavigation/pagenavigation";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
  
});

const StyledTextField = styled(TextField)({
  marginBottom: "20px",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "#aaa",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
    },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#1a1a1a",
  color: "#fff",
  padding: "10px 20px",
  width:'100%',
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#333",
  },
});

export default function Contact() {
  return (
    <>
      <Pagenavigation title={"Contact Us"} subheading={"Contact Us"} />
      <FormContainer>
        <Typography fontWeight={"bold"} marginBottom={'30px'} variant="h4" gutterBottom>
          Contact For Any Query
        </Typography>
        <Box display="flex" gap={2} width="100%">
          <StyledTextField label="Your Name" variant="outlined" />
          <StyledTextField label="Your Email" variant="outlined" />
        </Box>
        <StyledTextField label="Subject" variant="outlined" />
        <StyledTextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
        />
        <StyledButton sx={{
          marginBottom:'40px'
        }}>Send Message</StyledButton>
      </FormContainer>
    </>
  );
}
