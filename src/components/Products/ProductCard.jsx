import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAuth } from "../../context/authContextProvider";
import { ADMIN } from "../../helpers/consts";
import { useCart } from "../../context/cartContextProvider";
import { useProducts } from "../../context/productsContext";

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  const { addProductToCart, checkProductInCart } = useCart();
  const { deleteProduct } = useProducts();

  const {
    user: { email },
  } = useAuth();
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "15px", height: "fit-content" }}>
      <CardMedia
        sx={{ height: 500, cursor: "pointer" }}
        image={item.picture}
        title="green iguana"
        onClick={() => navigate(`/products/${item.id}`)}
      />
      <CardContent sx={{ bgcolor: "wheat" }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography
          sx={{ color: "green", fontWeight: "700" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.price} сом
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
          color="text.secondary"
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          bgcolor: "wheat",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {email == ADMIN ? (
          <>
            <IconButton onClick={() => deleteProduct(item.id)}>
              <DeleteForeverIcon />
            </IconButton>
            <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
              <EditIcon />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
            {checkProductInCart(item.id) ? (
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
        )}
      </CardActions>
    </Card>
  );
}
