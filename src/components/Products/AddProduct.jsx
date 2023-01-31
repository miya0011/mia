import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct, getProducts } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    type: "",
  });

  console.log(product);

  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <TextField
        value={product.name}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, name: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Название"
        variant="outlined"
        name="name"
        sx={{ bgcolor: "wheat" }}
      />
      <TextField
        value={product.description}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, description: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Описание"
        variant="outlined"
        name="description"
        sx={{ bgcolor: "wheat" }}
      />
      <TextField
        value={product.price}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, price: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Цена"
        variant="outlined"
        name="price"
        sx={{ bgcolor: "wheat" }}
      />
      <TextField
        value={product.picture}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, picture: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Картинка"
        variant="outlined"
        name="picture"
        sx={{ bgcolor: "wheat" }}
      />
      <TextField
        value={product.type}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, type: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Жанр"
        variant="outlined"
        name="type"
        sx={{ bgcolor: "wheat" }}
      />
      <Button
        onClick={() => {
          addProduct(product);
          navigate(-1);
          getProducts(product);
        }}
        variant="outlined"
        fullWidth
        size="large"
        sx={{ bgcolor: "wheat" }}
      >
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
