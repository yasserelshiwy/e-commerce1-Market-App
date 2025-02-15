// @ts-nocheck
import Hero from "../../components/Hero/Hero";
import Mian from "../../components/main/Mian";
import { Box, useTheme } from "@mui/material";
import { Helmet } from "react-helmet";
export default function Home() {
  const theme = useTheme();
  return (
    <div>
      <Helmet>
        <title> Market App</title>
        <meta
          name="description"
          content="E-commerce application through which you can buy available products, shop and add to the shopping cart"
        ></meta>
      </Helmet>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === "light" ? "#F6F6F6" : "#1D2021",
          py: 1,
        }}
      >
        <Hero />
        <Mian />
      </Box>
    </div>
  );
}
