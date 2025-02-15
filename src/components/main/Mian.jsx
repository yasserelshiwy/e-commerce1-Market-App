/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  AnimatePresence,
  motion,

} from "motion/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useContext, useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import ProducteDetails from "./ProducteDetails";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Loading from "../Loading/Loading";
import axios from "axios";
import { cartContext } from "../../context/cart.context";
import { productContext } from "../../context/product.context";
import { wishContext } from "../../context/WishList.context";
// !===api filter by category ====>
const allProduct1 = "/products";
const manProduct = "/products/category/men's clothing";
const womenProduct = "/products/category/women's clothing";
const electronics = "/products/category/electronics";
const jewelery = "/products/category/jewelery";

export default function Mian() {
  const { addToCart } = useContext(cartContext);
  const { addTowish } = useContext(wishContext);
  const { getProuduct, allProduct, setFlterProduct, flterProduct } =
    useContext(productContext);

  // &==== get product details  ====>

  const [ProductDetails, setProductDetails] = useState(null);

  async function getProuductDetails(id) {
    const options = {
      url: `https://fakestoreapi.com/products/${id}`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    setProductDetails(data);
  }

  // *===button toggle filter product ====>

  const handleChange = (event, newValue) => {
    setFlterProduct(newValue);
  };
  // *===Dialog state && fn() ====>

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // !============>


  useEffect(() => {
    getProuduct();
  }, [flterProduct]);
  return (
    <Container sx={{ py: 9, minHeight: "75vh" }}>
      <Stack
     
    
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          mb: 6,
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={4}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Select Products by category
          </Typography>
          <Typography fontWeight={300} sx={{ mt: 1 }} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="info"
          value={flterProduct}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(2, 137, 209, 0.86) !important",
              color: "#0288d1s",
              backgroundColor: "inherit",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <ToggleButton className="myButton" value={allProduct1}>
            All Products
          </ToggleButton>
          <ToggleButton className="myButton" value={manProduct}>
            Men's clothing
          </ToggleButton>
          <ToggleButton className="myButton" value={womenProduct}>
            Women's clothing
          </ToggleButton>
          <ToggleButton className="myButton" value={electronics}>
            Electronics
          </ToggleButton>
          <ToggleButton className="myButton" value={jewelery}>
            Jewelery
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      {allProduct ? (
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={5}
        >
          <AnimatePresence>
            {allProduct.map((items) => {
              return (
                <Card
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                  key={items.id}
                  sx={{
                    maxWidth: 345,
                    overflow: "hidden",
                    "&:hover": {
                      scale: "1.04",
                      transition: "0.3s",
                      ".fav-icon": { right: 0 },
                    },
                    transition: "0.3s",
                  }}
                >
                  <Box
                    sx={{
                      overflow: "hidden",
                      bgcolor: "white",
                      position: "relative",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="300"
                      image={items.image}
                      sx={{
                        objectFit: "contain",
                      }}
                    />
                    <Box
                      className="fav-icon"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: -40,
                        transition: "0.5s",
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          addTowish(items, items.id);
                        }}
                      >
                        <FavoriteIcon
                          sx={{ color: "#e61919", fontSize: "30px" }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardContent>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        gutterBottom
                        sx={{
                          fontWeight: "600",
                          display: "-webkit-box",
                          WebkitLineClamp: "1",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          pr: 2,
                        }}
                        variant="h6"
                        component="h2"
                      >
                        {items.title}
                      </Typography>
                      <Typography
                        color={"crimson"}
                        gutterBottom
                        variant="subtitle1"
                        component="p"
                        sx={{ fontWeight: "600" }}
                      >
                        ${items.price}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        mb: 1,
                      }}
                      color="info"
                      component={"p"}
                    >
                      {items.category}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="des-line"
                      sx={{
                        color: "text.secondary",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                      }}
                      component={"p"}
                    >
                      {items.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Box>
                      <Button
                        onClick={() => {
                          handleClickOpen();
                          getProuductDetails(items.id);
                        }}
                        sx={{ textTransform: "capitalize" }}
                        size="large"
                      >
                        <RemoveRedEyeIcon sx={{ mr: 1 }} fontSize="small" />
                      </Button>
                      <Button
                        onClick={() => {
                          addToCart(items, items.id);
                        }}
                        sx={{ textTransform: "capitalize" }}
                        size="large"
                      >
                        <AddShoppingCartOutlinedIcon
                          sx={{ mr: 1 }}
                          fontSize="small"
                        />
                      </Button>
                    </Box>
                    <Rating
                      precision={0.1}
                      name="read-only"
                      value={items.rating.rate}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
          </AnimatePresence>
        </Stack>
      ) : (
        <Loading />
      )}

      <Dialog
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "90%", md: "800px" },
            minHeight: "200px",
            position: "relative",
            p: 1,
            borderRadius: "10px !important",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            textAlign: "right",
            paddingInline: { xs: "0px", sm: "10px" },
            py: 1,
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <IconButton
            sx={{
              "&:hover": {
                color: "red",
                rotate: "180deg",
                transition: "0.3s",
              },
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </Box>
        <ProducteDetails prodctInfo={ProductDetails} />
      </Dialog>
    </Container>
  );
}
