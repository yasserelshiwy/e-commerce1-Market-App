// @ts-nocheck
import { Box } from "@mui/material";
import Mian from "../../components/main/Mian";
import { Helmet } from "react-helmet";

export default function Product() {
  return (
    <Box>
      <Helmet>
        <title> product</title>
        <meta name="description" content="product page"></meta>
      </Helmet>
      <Mian />
    </Box>
  );
}
