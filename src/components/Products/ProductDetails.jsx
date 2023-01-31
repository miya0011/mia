import { Button, Grid, IconButton, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useProducts } from "../../context/productsContext";
import { useCart } from "../../context/cartContextProvider";

const ProductDetails = () => {
  const { id } = useParams();

  const { getOneProduct, oneProduct } = useProducts();

  const { addProductToCart, checkProductInCart } = useCart();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  //   console.log(oneProduct);

  return (
    <Grid className="Paper">
      <Grid className="book">
        <Grid className="book-cover">
          <img
            src={oneProduct.picture}
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </Grid>
        <Grid
          className="book-content"
          sx={{ padding: "55px", fontSize: "16px" }}
        >
          <Typography variant="h3">{oneProduct.name}</Typography>
          <Typography variant="subtitle1">{oneProduct.type}</Typography>

          <br />
          <Typography variant="caption"> {oneProduct.description} </Typography>
          <Typography sx={{}} variant="caption">
            {" "}
            {oneProduct.price} сом{" "}
          </Typography>
          <IconButton
            onClick={() => addProductToCart(oneProduct)}
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "0px auto",
            }}
          >
            {checkProductInCart(oneProduct.id) ? (
              <>
                <ShoppingCartIcon
                  sx={{
                    color: "brown",
                  }}
                />
              </>
            ) : (
              <>
                <AddShoppingCartIcon />
              </>
            )}
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
