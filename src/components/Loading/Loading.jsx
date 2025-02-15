import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span className="loader"></span>
    </Box>
  );
}
