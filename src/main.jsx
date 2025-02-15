import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/css";
import "@fontsource/roboto";
import App from "./App.jsx";
// import { Provider } from "react-redux";
// import { store } from "./Redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <App />
  
  </StrictMode>
);
