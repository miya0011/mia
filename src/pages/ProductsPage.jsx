import { Box, Grid } from "@mui/material";
import ProductsList from "../components/Products/ProductsList";
import SideBar from "../components/Products/SideBar";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <Box p={5}>
        <Grid container spacing={3}>
          <ProductsList />
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsPage;
