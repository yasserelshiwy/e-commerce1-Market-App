/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Loading from "../Loading/Loading";
import { useContext } from "react";
import { cartContext } from "../../context/cart.context";

export default function ProducteDetails({ prodctInfo }) {
  const { addToCart } = useContext(cartContext);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {prodctInfo ? (
        <>
          {" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: { xs: "15px", md: "0px" },
              ml: 1,
            }}
          >
            <img
              src={prodctInfo.image}
              style={{ width: 200, borderRadius: "10px" }}
              alt=""
            />
          </Box>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h5"
              sx={{
                my: 2,
                paddingRight: { xs: "0px", md: "50px" },
                paddingInline: { xs: "10px", sm: "0px" },
              }}
              component={"h2"}
            >
              {prodctInfo.title}
            </Typography>
            <Typography
              color="info"
              component={"p"}
              variant="h5"
              sx={{ mb: 1 }}
            >
              {prodctInfo.category}
            </Typography>
            <Typography
              component={"p"}
              fontSize={"22px"}
              color={"crimson"}
              variant="h6"
            >
              ${prodctInfo.price}
            </Typography>
            <Typography
              component={"p"}
              variant="body1"
              sx={{
                my: 1,
                paddingRight: { xs: "0px", md: "14px" },
                paddingInline: { xs: "10px", sm: "0px" },
              }}
            >
              {prodctInfo.description}
            </Typography>

            <Button
              sx={{ my: 3, textTransform: "capitalize" }}
              variant="contained"
              onClick={() => {
                addToCart(prodctInfo, prodctInfo.id);
              }}
            >
              <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
              add to cart
            </Button>
          </Box>
        </>
      ) : (
        <Loading />
      )}
    </Box>
  );
}
