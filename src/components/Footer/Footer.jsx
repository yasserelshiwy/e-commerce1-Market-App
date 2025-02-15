import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: { xs: "11px", md: "18px" } }}
      >
        Designed and developed by
        <Button
          sx={{
            fontSize: { xs: "11px", md: "18px" },
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Yasser Elshiwy Front-End Wep Developer
        </Button>
        ©2024
      </Typography>
    </Box>
  );
}
