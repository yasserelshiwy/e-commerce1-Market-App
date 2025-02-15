import {
  Box,
  Container,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import * as React from "react";
import List from "@mui/material/List";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
const options = ["AR", "EN"];
// eslint-disable-next-line react/prop-types
export default function Header({ setDarkMode }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
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

  return (
    <Box
      sx={{
        backgroundColor: "#2b3445",
        color: "white",
        paddingBlock: "3px",
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <Typography
            sx={{
              backgroundColor: "#d23f57",
              fontSize: "12px",
              borderRadius: "15px",
              paddingInline: "10px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBlock: "4px",
            }}
          >
            HOT
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "200" }}>
            Free Express Shipping
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
          {theme.palette.mode === "light" ? (
            <IconButton
              sx={{ borderRadius: "50%" }}
              onClick={() => {
                localStorage.setItem("mode", "true");
                setDarkMode(true);
              }}
              color="inherit"
            >
              <DarkModeOutlined sx={{ fontSize: "18px" }} />
            </IconButton>
          ) : (
            <IconButton
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
              onClick={() => {
                localStorage.setItem("mode", "false");
                setDarkMode(false);
              }}
              color="inherit"
            >
              <LightModeOutlined sx={{ fontSize: "18px" }} />
            </IconButton>
          )}

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ m: 0, p: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label=""
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
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
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <TwitterIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
