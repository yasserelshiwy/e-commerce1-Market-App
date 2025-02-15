import Header from "../Header/Header";
import Header2 from "../Header/Header2";
import Header3 from "../Header/Header3";
import Footer from "../Footer/Footer";
import ScrollToTop from "../scroll/ScrollToTop";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("mode"))
  );

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header setDarkMode={setDarkMode} />
        <Header2 />
        <Header3 />

        <Outlet />

        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}
