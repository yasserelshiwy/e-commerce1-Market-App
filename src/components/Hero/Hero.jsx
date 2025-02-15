// @ts-nocheck
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";

import shose from "../../assets/img/banner-17.jpg";

import comp from "../../assets/img/banner-16.jpg";

import man from "../../assets/img/banner-15.jpg";

import women from "../../assets/img/banner-25.jpg";
import Jewelery from "../../assets/img/260-2607785_orchid-fashions-jewellery-models-png-hd.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import IconSection from "./IconSection";
export default function Hero() {
  return (
    <Container>
      <Box
        sx={{
          mt: 2.5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide style={{ height: "100%" }}>
            <Box sx={{ position: "relative" }}>
              <img style={{ width: "100%" }} src={man} alt="" />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "8%",
                }}
              >
                <Typography
                  sx={{
                    color: "#222",
                    fontSize: { xs: "18px", sm: "25px" },
                  }}
                >
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 600,

                    fontSize: { xs: "18px", sm: "25px", md: "48px" },
                  }}
                >
                  MEN
                </Typography>
                <Stack
                  sx={{
                    justifyContent: { sm: "left" },
                  }}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography
                    color={"#333"}
                    mr={1}
                    sx={{
                      fontSize: { xs: "18px", sm: "25px", md: "34px" },
                    }}
                  >
                    SALE UP TO
                  </Typography>
                  <Typography
                    color={"#D23F57"}
                    sx={{
                      fontSize: { xs: "18px", sm: "25px", md: "34px" },
                    }}
                  >
                    30% OFF
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 300,
                    my: 1,
                    fontSize: { xs: "10px", sm: "16px" },
                  }}
                  variant="body1"
                >
                  Get Free Shipping on orders over $99.00
                </Typography>

                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    fontSize: { xs: "10px", sm: "16px" },

                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    },
                  }}
                  variant="contained"
                >
                  shop now
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100%" }}>
            <Box sx={{ position: "relative" }}>
              <img style={{ width: "100%" }} src={women} alt="" />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "8%",
                }}
              >
                <Typography
                  sx={{
                    color: "#222",
                    fontSize: { xs: "18px", sm: "25px" },
                  }}
                >
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 600,

                    fontSize: { xs: "18px", sm: "25px", md: "48px" },
                  }}
                >
                  WOMEN
                </Typography>
                <Stack
                  sx={{
                    justifyContent: { sm: "left" },
                  }}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography
                    color={"#333"}
                    mr={1}
                    sx={{
                      fontSize: { xs: "18px", sm: "25px", md: "34px" },
                    }}
                  >
                    SALE UP TO
                  </Typography>
                  <Typography
                    color={"#D23F57"}
                    sx={{
                      fontSize: { xs: "18px", sm: "25px", md: "34px" },
                    }}
                  >
                    18% OFF
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 300,
                    my: 1,
                    fontSize: { xs: "10px", sm: "16px" },
                  }}
                  variant="body1"
                >
                  Get Free Shipping on orders over $99.00
                </Typography>

                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    fontSize: { xs: "10px", sm: "16px" },

                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    },
                  }}
                  variant="contained"
                >
                  shop now
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100%" }}>
            <Box sx={{ position: "relative" }}>
              <img style={{ width: "100%" }} src={Jewelery} alt="" />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "8%",
                }}
              >
                <Typography
                  sx={{
                    color: "#222",
                    fontSize: { xs: "18px", sm: "25px" },
                  }}
                >
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 600,

                    fontSize: { xs: "18px", sm: "25px", md: "48px" },
                  }}
                >
                  Jewelery
                </Typography>
                <Stack
                  sx={{
                    justifyContent: { sm: "left" },
                  }}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography
                    color={"#333"}
                    mr={1}
                    sx={{
                      fontSize: { xs: "18px", sm: "25px", md: "34px" },
                    }}
                  >
                    SALE UP TO
                  </Typography>
                  <Typography
                    color={"#D23F57"}
                    sx={{
                      fontSize: { xs: "18px", sm: "25px", md: "34px" },
                    }}
                  >
                    22% OFF
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 300,
                    my: 1,
                    fontSize: { xs: "10px", sm: "16px" },
                  }}
                  variant="body1"
                >
                  Get Free Shipping on orders over $99.00
                </Typography>

                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    fontSize: { xs: "10px", sm: "16px" },

                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    },
                  }}
                  variant="contained"
                >
                  shop now
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>

        <Box
          sx={{
            minWidth: "26%",
            width: { sm: "100%", md: "26%" },
            mt: 0.5,
            display: { xs: "none", sm: "flex" },
            gap: 2,
            flexDirection: { xs: "row", md: "column" },
          }}
        >
          <Box sx={{ position: "relative", width: { sm: "50%", md: "100%" } }}>
            <img style={{ width: "100%" }} src={shose} alt="" />
            <Stack
              sx={{
                position: "absolute",
                p: 3,
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: { sm: 3, md: 1 },
              }}
            >
              <Typography
                sx={{ fontSize: "18px", fontWeight: "400", color: "#222" }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  letterSpacing: "1",
                  color: "#222",
                  maxWidth: "150px",
                }}
              >
                SUMMER SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  "&:hover": { color: "#D23F57", transition: "0.3s" },
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {" "}
                Shop Now <ArrowRightAltIcon />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative", width: { sm: "50%", md: "100%" } }}>
            <img src={comp} style={{ width: "100%" }} alt="" />
            <Stack
              sx={{
                position: "absolute",
                p: 3,
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: { sm: 4, md: 1 },
              }}
            >
              <Typography
                sx={{ fontSize: "18px", fontWeight: "400", color: "#222" }}
              >
                GAMING 4K
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  letterSpacing: "1",
                  color: "#222",
                  maxWidth: "150px",
                }}
              >
                DESKTOPS & LAPTOPS
              </Typography>
              <Link
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  "&:hover": { color: "#D23F57", transition: "0.3s" },
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {" "}
                Shop Now <ArrowRightAltIcon />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
}
