import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useCart } from "../../context/cartContextProvider";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.wheat,
    color: theme.palette.common.black,
    border: "solid 1px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "solid 1px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    border: "solid 1px",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: "solid 1px",
  },
}));

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();
  const navigate = useNavigate();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <TableContainer component={Paper} sx={{ bgcolor: "wheat" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Картинка</StyledTableCell>
            <StyledTableCell align="right">Название</StyledTableCell>
            <StyledTableCell align="right">Жанр</StyledTableCell>
            <StyledTableCell align="right">Детали</StyledTableCell>
            <StyledTableCell align="right">Цена</StyledTableCell>
            <StyledTableCell align="right">Количество</StyledTableCell>
            <StyledTableCell align="right">Сумма </StyledTableCell>
            <StyledTableCell align="right">-</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img
                  src={row.item.picture}
                  width="100px"
                  height="100px"
                  alt=""
                />
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: 600 }} align="right">
                {row.item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell sx={{ textAlign: "center" }} align="right">
                {row.item.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>
              <StyledTableCell align="right">
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: 600 }} align="right">
                {row.subPrice}
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton onClick={() => deleteCartProduct(row.item.id)}>
                  <DeleteForeverIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            color: "black",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
          onClick={() => {
            navigate(`/paycard`);
          }}
        >
          <AccountBalanceWalletIcon /> {cart?.totalPrice} сом
        </Button>
        <Button
          sx={{
            color: "black",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
          onClick={() => {
            cartCleaner();
          }}
        >
          <DeleteForeverIcon />
        </Button>
      </Box>
    </TableContainer>
  );
}
