/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router";

import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LaptopChromebookOutlined, Close } from "@mui/icons-material";
import GestureIcon from "@mui/icons-material/Gesture";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemButton from "@mui/material/ListItemButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link1 from "./Link1";
import { productContext } from "../../context/product.context";
// !===api filter by category ====>
const allProduct1 = "/products";
const manProduct = "/products/category/men's clothing";
const womenProduct = "/products/category/women's clothing";
const electronics = "/products/category/electronics";
const jewelery = "/products/category/jewelery";
export default function Header3() {
  const { setFlterProduct } = React.useContext(productContext);
  const theme = useTheme();

  // ~==== category selaction ====>
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // !====Drawer ====>
  const [state, setState] = React.useState({
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
  // ^===fn()s  to filter product====>
  function handelAllProduct() {
    setFlterProduct(allProduct1);
  }
  function handelManProduct() {
    setFlterProduct(manProduct);
  }
  function handelWomenProduct() {
    setFlterProduct(womenProduct);
  }
  function handelElectronicsProduct() {
    setFlterProduct(electronics);
  }
  function handelJeweleryProduct() {
    setFlterProduct(jewelery);
  }

  return (
    <Container
      sx={{
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            bgcolor: theme.palette.mode === "light" ? "#F6F9FC" : "#252b32",
            color: theme.palette.text.secondary,
            width: 222,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,

              bgcolor: theme.palette.mode === "light" ? "#F6F9FC" : "#252b32",
            },
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              handelAllProduct();
            }}
          >
            <ListItemIcon>
              <ProductionQuantityLimitsIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>All Products</ListItemText>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose();
              handelManProduct();
            }}
          >
            <ListItemIcon>
              <ManIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Men's clothing</ListItemText>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose();
              handelWomenProduct();
            }}
          >
            <ListItemIcon>
              <WomanIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Women's clothing</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              handelJeweleryProduct();
            }}
          >
            <ListItemIcon>
              <GestureIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Jewelery</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              handelElectronicsProduct();
            }}
          >
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      <Box>
        {useMediaQuery("(min-width:1110px)") && (
          <Stack gap={4} direction={"row"} alignItems={"center"}>
            <NavLink
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              className={({ isActive }) => {
                return ` ${
                  isActive
                    ? theme.palette.mode === "light"
                      ? "active-Link-dark"
                      : "active-Link-light"
                    : ""
                }`;
              }}
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return ` ${
                  isActive
                    ? theme.palette.mode === "light"
                      ? "active-Link-dark"
                      : "active-Link-light"
                    : ""
                }`;
              }}
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              to={"/product"}
            >
              products
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return ` ${
                  isActive
                    ? theme.palette.mode === "light"
                      ? "active-Link-dark"
                      : "active-Link-light"
                    : ""
                }`;
              }}
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              to={"/cart"}
            >
              Cart
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return ` ${
                  isActive
                    ? theme.palette.mode === "light"
                      ? "active-Link-dark"
                      : "active-Link-light"
                    : ""
                }`;
              }}
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              to={"/wishList"}
            >
              WishList
            </NavLink>

            <Link1 title={"User Account"} />
            <Link1 title={"Vendor Account"} />
          </Stack>
        )}

        {useMediaQuery("(max-width:1110px)") && (
          <IconButton onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          sx={{
            px: 5,
            ".MuiPaper-root": {
              bgcolor: theme.palette.mode === "light" ? "#F6F9FC" : "#252b32",
            },
          }}
        >
          <Box sx={{ textAlign: "right", px: 2, py: 1 }}>
            <IconButton
              sx={{
                "&:hover": {
                  color: "red",
                  rotate: "180deg",
                  transition: "0.3s",
                },
              }}
              onClick={toggleDrawer("left", false)}
            >
              <Close />
            </IconButton>
          </Box>
          <Box>
            <List sx={{ py: 0, my: 0 }}>
              <ListItem
                sx={{
                  py: 0,
                  my: 0,
                  ".MuiButtonBase-root": {
                    display: "flex",
                    justifyContent: "center",
                    py: 1,
                  },
                }}
              >
                <ListItemButton>
                  <NavLink
                    className={({ isActive }) => {
                      return ` ${
                        isActive
                          ? theme.palette.mode === "light"
                            ? "active-Link-dark"
                            : "active-Link-light"
                          : ""
                      }`;
                    }}
                    style={{
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                    }}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  py: 0,
                  my: 0,
                  ".MuiButtonBase-root": {
                    display: "flex",
                    justifyContent: "center",
                    py: 1,
                  },
                }}
              >
                <ListItemButton>
                  <NavLink
                    className={({ isActive }) => {
                      return ` ${
                        isActive
                          ? theme.palette.mode === "light"
                            ? "active-Link-dark"
                            : "active-Link-light"
                          : ""
                      }`;
                    }}
                    style={{
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                      marginBottom: "10px",
                    }}
                    to={"/product"}
                  >
                    products
                  </NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  py: 0,
                  my: 0,
                  ".MuiButtonBase-root": {
                    display: "flex",
                    justifyContent: "center",
                    py: 1,
                  },
                }}
              >
                <ListItemButton>
                  <NavLink
                    className={({ isActive }) => {
                      return ` ${
                        isActive
                          ? theme.palette.mode === "light"
                            ? "active-Link-dark"
                            : "active-Link-light"
                          : ""
                      }`;
                    }}
                    style={{
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                      marginBottom: "10px",
                    }}
                    to={"/cart"}
                  >
                    Cart
                  </NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  py: 0,
                  my: 0,
                  ".MuiButtonBase-root": {
                    display: "flex",
                    justifyContent: "center",
                    py: 1,
                  },
                }}
              >
                <ListItemButton>
                  <NavLink
                    className={({ isActive }) => {
                      return ` ${
                        isActive
                          ? theme.palette.mode === "light"
                            ? "active-Link-dark"
                            : "active-Link-light"
                          : ""
                      }`;
                    }}
                    style={{
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                      marginBottom: "10px",
                    }}
                    to={"/wishList"}
                  >
                    WishList
                  </NavLink>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          {[
            {
              mainLink: "user account",
              subLinks: ["Dashboard", "Products", "orders", "profile"],
            },
            {
              mainLink: "vendor account",
              subLinks: ["Dashboard", "Products", "orders", "profile"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{
                  bgcolor: "transparent!important ",
                  px: 5,
                  ".MuiPaper-root &:before": { height: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLinks.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Drawer>
      </Box>
    </Container>
  );
}
