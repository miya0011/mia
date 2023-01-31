import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import CartContextProvider from "./context/cartContextProvider";
import AuthContextProvider from "./context/authContextProvider";
import MainRoutes from "./routes/MainRoutes";
import FooterCustom from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
