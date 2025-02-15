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
import cartEmpty from "../../assets/img/shopping.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import { useContext } from "react";
import { cartContext } from "../../context/cart.context";
import { Link } from "react-router";
import { Helmet } from "react-helmet";
export default function Cart() {
  const {
    cart,
    removeFromCart,
    removeAllCart,
    increaseAmount,
    decreaseAmount,
    total,
  } = useContext(cartContext);
  removeAllCart;
  console.log(cart);
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
        <title> Cart</title>
        <meta name="description" content="Shopping cart page"></meta>
      </Helmet>
      <Container>
        <Box>
          {cart == "" ? (
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
                <img src={cartEmpty} style={{ width: "100%" }} alt="" />
                <Typography
                  component={"p"}
                  sx={{ fontSize: "20px", fontWeight: "600" }}
                >
                  The Cart Is Empty go to order Now
                </Typography>
                <Link to={"/"}>
                  <Button variant="contained">Home</Button>
                </Link>
              </Box>
            </>
          ) : (
            <>
              {" "}
              <Stack gap={2}>
                {cart.map((items) => {
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

                        <Stack gap={1}>
                          <Typography
                            sx={{ fontWeight: "600", fontSize: "12px" }}
                          >
                            price : <span>$ {items.price}</span>
                          </Typography>
                          <Typography
                            color={"crimson"}
                            sx={{ fontWeight: "600", fontSize: "14px" }}
                          >
                            <span>total : </span>
                            {`$ ${parseFloat(
                              items.price * items.amount
                            ).toFixed(2)}`}
                          </Typography>
                        </Stack>
                        <Stack
                          justifyContent={"center"}
                          alignItems={"center"}
                          // direction={"column"}
                          gap={1}
                          sx={{
                            minWidth: "30px",
                            flexDirection: { xs: "row", md: "column-reverse" },
                          }}
                        >
                          <IconButton
                            onClick={() => {
                              decreaseAmount(items.id);
                            }}
                          >
                            <RemoveIcon
                              sx={{
                                fontSize: "17px",

                                borderRadius: "50%",
                                backgroundColor:
                                  theme.palette.mode === "light"
                                    ? "#e8e8e8"
                                    : "#000000",
                              }}
                            />
                          </IconButton>
                          {items.amount}
                          <IconButton
                            onClick={() => {
                              increaseAmount(items.id);
                            }}
                          >
                            <AddIcon
                              sx={{
                                fontSize: "17px",

                                borderRadius: "50%",
                                backgroundColor:
                                  theme.palette.mode === "light"
                                    ? "#e8e8e8"
                                    : "#000000",
                              }}
                            />
                          </IconButton>
                        </Stack>

                        <Rating
                          precision={0.1}
                          name="read-only"
                          value={items.rating.rate}
                          readOnly
                        />

                        <IconButton
                          sx={{
                            "&:hover": {
                              color: "red",

                              transition: "0.3s",
                            },
                          }}
                          onClick={() => {
                            removeFromCart(items.id);
                          }}
                        >
                          <DeleteIcon sx={{ fontSize: "25px" }} />
                        </IconButton>
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
                <Typography sx={{ fontSize: "18px" }} color={"crimson"}>
                  <span
                    style={{
                      color: theme.palette.text.primary,
                      fontSize: "20px",
                    }}
                  >
                    total:{" "}
                  </span>
                  $ {parseFloat(total).toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ mt: 1, fontWeight: "600" }}
                  onClick={removeAllCart}
                >
                  Delete all cart
                </Button>
              </Stack>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}
