import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import CartContextProvider from "./context/CartContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";
import MainRoutes from "./routes/MainRoutes";
import FooterCustom from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <AuthContextProvider>
        <MainRoutes />
        <App />
        <FooterCustom />
      </AuthContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
