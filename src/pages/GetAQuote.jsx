import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";

export default function GetAQuote() {
  return (
    <Box px={{ xs: 2, md: 10 }} py={6} bgcolor="#f9f9f9">
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Get a Quote
      </Typography>
      <Typography variant="body1" mb={4} maxWidth="700px">
        Tell us about your project idea and we’ll get back to you with a custom
        quote tailored to your needs.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Your Name" variant="outlined" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Your Email" variant="outlined" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Phone Number" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="Service Interested In"
            variant="outlined"
          >
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="eCommerce Solutions">eCommerce Solutions</MenuItem>
            <MenuItem value="Mobile Apps">Mobile Applications</MenuItem>
            <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
            <MenuItem value="SaaS Development">SaaS Development</MenuItem>
            <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Your Message"
            multiline
            rows={6}
            variant="outlined"
            placeholder="Briefly describe your project, goals, and expectations..."
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: "none", px: 4 }}
          >
            Submit Request
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
