// @ts-nocheck
import { Close, ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  InputBase,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";
import { cartContext } from "../../context/cart.context";
import cartEmpty from "../../assets/img/shopping.png";
import { wishContext } from "../../context/WishList.context";

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = [
  "All Categories",
  "Men's clothing",
  "Women's clothing",
  "Jewelery",
  "Electronics",
];

export default function Header2() {
  const {
    cart,
    removeFromCart,
    removeAllCart,
    increaseAmount,
    decreaseAmount,
    itemamount,
    total,
  } = useContext(cartContext);

  const { wishitemamount } = useContext(wishContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 3,
        gap: 1,
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: theme.palette.text.primary,
        }}
        to={"/"}
      >
        <Stack alignItems={"center"}>
          <ShoppingCartOutlined />
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "13px", md: "15px" },

              textWrap: "nowrap",
            }}
          >
            E-commerce
          </Typography>
        </Stack>
      </Link>
      <Search
        sx={{
          display: "flex",
          borderRadius: "22px",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: theme.palette.mode === "light" ? "#F6F9FC" : "#252b32",
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              p: "0",
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ px: { xs: 0, md: 1 } }}
            >
              <ListItemText
                sx={{
                  width: { xs: 70, md: 90 },
                  ".MuiTypography-root": {
                    fontSize: { xs: "11px", md: "14px" },
                    fontWeight: "500",
                  },
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px" }} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton onClick={toggleDrawer("right", true)} aria-label="cart">
          <StyledBadge badgeContent={itemamount} color="success">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <Link to={"/wishList"}>
          <IconButton aria-label="Fav">
            <StyledBadge badgeContent={wishitemamount} color="error">
              <FavoriteIcon />
            </StyledBadge>
          </IconButton>
        </Link>
      </Stack>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiPaper-root": {
            backgroundColor: theme.palette.mode === "light" ? "white" : "black",
            minWidth: "400px",
            px: 2,
          },
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ py: 1, borderBottom: 1 }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            cart Items
          </Typography>

          <Box sx={{ textAlign: "right", px: 2, py: 1 }}>
            <IconButton
              sx={{
                "&:hover": {
                  color: "red",
                  rotate: "180deg",
                  transition: "0.3s",
                },
              }}
              onClick={toggleDrawer("right", false)}
            >
              <Close />
            </IconButton>
          </Box>
        </Stack>
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
                  width: "100%",
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
              <Stack gap={2} p={2} sx={{ height: "80vh", overflow: "auto" }}>
                {cart.map((items) => {
                  return (
                    <>
                      <Stack
                        key={items.id}
                        gap={1}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",

                          borderRadius: "20px",
                          px: 2,
                          py: 1,
                          minHeight: "150px",
                          border: "1px solid",
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
                              width: "80px",
                              height: "80px",
                              objectFit: "contain",
                            }}
                            alt=""
                          />
                        </Box>
                        <Stack
                          gap={0.5}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Typography
                            sx={{
                              fontWeight: "800",
                              fontSize: "15px",
                              maxWidth: "150px",
                              display: "-webkit-box",
                              WebkitLineClamp: "1",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              textAlign: "center",
                            }}
                          >
                            {items.title}
                          </Typography>

                          <Typography
                            sx={{ fontWeight: "500", fontSize: "15px" }}
                          >
                            {items.category}
                          </Typography>

                          <Typography
                            sx={{ fontWeight: "600", fontSize: "12px" }}
                          >
                            price : <span>$ {items.price}</span>
                          </Typography>

                          <Stack
                            justifyContent={"center"}
                            alignItems={"center"}
                            direction={"row"}
                            gap={1}
                            sx={{ fontSize: "" }}
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
                          <DeleteIcon sx={{ fontSize: "18px" }} />
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
                sx={{ py: 2, mb: 2 }}
                borderTop={1}
                borderBottom={1}
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
                  sx={{ fontWeight: "600" }}
                  onClick={removeAllCart}
                >
                  Delete all cart
                </Button>
              </Stack>

              <Link
                to={"/cart"}
                style={{
                  color: theme.palette.text.primary,
                  paddingBlock: "20px",
                }}
              >
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{ width: "100%", textTransform: "capitalize" }}
                >
                  view cart
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Drawer>
    </Container>
  );
}
