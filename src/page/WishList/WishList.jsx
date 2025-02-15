/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
import {
  Box,
  Button,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import wishEmpty from "../../assets/img/wish-list.png";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import DeleteIcon from "@mui/icons-material/Delete";

import { useContext } from "react";

import { Link } from "react-router";
import { wishContext } from "../../context/WishList.context";
import { cartContext } from "../../context/cart.context";
import { Helmet } from "react-helmet";
export default function WishList() {
  const { addToCart } = useContext(cartContext);
  const { wish, removeFromwish, removeAllwish } = useContext(wishContext);
  removeAllwish;
  console.log(wish);
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "73.8vh",
        backgroundColor: theme.palette.mode === "light" ? "#F6F6F6" : "#1D2021",
        py: 5,
      }}
    >
      <Helmet>
        <title>wishList</title>
        <meta name="description" content="wishList  page"></meta>
      </Helmet>
      <Container>
        <Box>
          {wish == "" ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  flexDirection: "column",
                  gap: 2,
                  width: { xs: "100%", md: "60%", lg: "50%" },
                }}
              >
                <img src={wishEmpty} style={{ width: "100%" }} alt="" />
                <Typography
                  component={"p"}
                  sx={{ fontSize: "20px", fontWeight: "600" }}
                >
                  The wishList Is Empty go to Add Now
                </Typography>
                <Link to={"/"}>
                  <Button variant="contained" color="error">
                    Home
                  </Button>
                </Link>
              </Box>
            </>
          ) : (
            <>
              {" "}
              <Stack gap={2}>
                {wish.map((items) => {
                  return (
                    <>
                      <Stack
                        key={items.id}
                        gap={1}
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", md: "row" },
                          justifyContent: "space-between",
                          alignItems: "center",
                          background: theme.palette.background.paper,
                          borderRadius: "20px",
                          px: 2,
                          py: 1,
                          minHeight: "150px",
                          boxShadow: "0px 0px 8px 1px  #ff000047",
                        }}
                      >
                        <Box
                          sx={{
                            borderRadius: "50%",
                            bgcolor: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            p: 1,
                          }}
                        >
                          <img
                            src={items.image}
                            style={{
                              borderRadius: "50%",
                              width: "100px",
                              height: "100px",
                              objectFit: "contain",
                            }}
                            alt=""
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontWeight: "800",
                            fontSize: "20px",
                            maxWidth: "200px",
                            display: "-webkit-box",
                            WebkitLineClamp: "1",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            textAlign: { xs: "center", md: "left" },
                          }}
                        >
                          {items.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontSize: "20px",
                            minWidth: "150px",
                            textAlign: "center",
                          }}
                        >
                          {items.category}
                        </Typography>

                        <Typography
                          color={"crimson"}
                          sx={{ fontWeight: "600", fontSize: "14px" }}
                        >
                          price : <span>$ {items.price}</span>
                        </Typography>

                        <Rating
                          precision={0.1}
                          name="read-only"
                          value={items.rating.rate}
                          readOnly
                        />
                        <Stack direction={"row"} alignItems={"center"}>
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
                          <IconButton
                            sx={{
                              "&:hover": {
                                color: "red",

                                transition: "0.3s",
                              },
                            }}
                            onClick={() => {
                              removeFromwish(items.id);
                            }}
                          >
                            <DeleteIcon sx={{ fontSize: "25px" }} />
                          </IconButton>
                        </Stack>
                      </Stack>
                    </>
                  );
                })}
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                borderTop={1}
                mt={3}
                sx={{ py: 2 }}
              >
                <Button
                  variant="contained"
                  color="error"
                  sx={{ mt: 1, fontWeight: "600" }}
                  onClick={removeAllwish}
                >
                  Delete all wishList
                </Button>
              </Stack>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}
