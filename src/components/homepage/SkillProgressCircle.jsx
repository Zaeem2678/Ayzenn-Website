import { Box, Typography, CircularProgress } from "@mui/material";

export default function SkillProgressCircle({ value, label }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 2,
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={80}
          sx={{
            color: "#E0E0E0", // light gray background
            position: "absolute",
          }}
        />
        <CircularProgress
          variant="determinate"
          value={value}
          size={80}
          sx={{
            color: "#FBA504", // orange progress
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography component="div" fontWeight="bold">
            {`${value}%`}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body1"
        fontWeight={500}
        textAlign="center"
        color="#726D7B"
        mt={1}
        sx={{ maxWidth: 100 }}
      >
        {label}
      </Typography>
    </Box>
  );
}
