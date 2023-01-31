import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../context/productsContext";
import Button from "@mui/material/Button";
const EditProduct = () => {
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, saveEditedProduct } = useProducts();

  const [product, setProduct] = useState(oneProduct);

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  console.log(product);

  return (
    <Box sx={{ width: "65vw", margin: "10vh auto", height: "100%" }}>
      <TextField
        fullWidth
        variant="outlined"
        name="name"
        id="outlined-basic"
        margin="10px"
        sx={{ bgcolor: "rgb(243, 226, 196)" }}
        value={product.name || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        name="description"
        id="outlined-basic"
        margin="10px"
        sx={{ bgcolor: "rgb(243, 226, 196)" }}
        value={product.description || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        type="number"
        variant="outlined"
        name="price"
        id="outlined-basic"
        margin="10px"
        sx={{ bgcolor: "rgb(243, 226, 196)" }}
        value={product.price || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        name="picture"
        id="outlined-basic"
        margin="10px"
        sx={{ bgcolor: "rgb(243, 226, 196)" }}
        value={product.picture || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        name="type"
        id="outlined-basic"
        margin="10px"
        sx={{ bgcolor: "rgb(243, 226, 196)" }}
        value={product.type || ""}
        onChange={handleInp}
      />
      <Button
        onClick={() => {
          saveEditedProduct(id, product);
          navigate(-1);
        }}
        variant="outlined"
        fullWidth
        size="large"
        sx={{ bgcolor: "rgb(243, 226, 196)" }}
      >
        Edit Product
      </Button>
    </Box>
  );
};

export default EditProduct;
