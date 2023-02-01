import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./context/authContextProvider";
import CartContextProvider from "./context/cartContextProvider";
import ProductsContextProvider from "./context/productsContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar/>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  )
};

export default App;
