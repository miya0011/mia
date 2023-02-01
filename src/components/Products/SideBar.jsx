import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../context/productsContext";

const Sidebar = () => {
  const { fetchByParams } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={2.5}>
      <Paper elevation={5} sx={{ p: 2, bgcolor: "wheat" }}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Grid
          sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
        >
          <FormControl sx={{ margin: "30px" }}>
            <FormLabel>Жанр</FormLabel>
            <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
              <FormControlLabel value="all" control={<Radio />} label="Все" />
              <FormControlLabel
                value="Бестселлеры"
                control={<Radio />}
                label="Бестселлеры"
              />
              <FormControlLabel
                value="Фантастика"
                control={<Radio />}
                label="Фантастика"
              />
              <FormControlLabel
                value="Детектив"
                control={<Radio />}
                label="Детектив"
              />
              <FormControlLabel
                value="Фентези"
                control={<Radio />}
                label="Фентези"
              />
              <FormControlLabel
                value="Романы"
                control={<Radio />}
                label="Романы"
              />
              <FormControlLabel
                value="Манга"
                control={<Radio />}
                label="Манга"
              />
              <FormControlLabel
                value="Эротика"
                control={<Radio />}
                label="Эротика"
              />
              <FormControlLabel
                value="Приключения"
                control={<Radio />}
                label="Приключения"
              />
              <FormControlLabel
                value="Поэзия"
                control={<Radio />}
                label="Поэзия"
              />
              <FormControlLabel
                value="Ужасы"
                control={<Radio />}
                label="Ужасы"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ margin: "30px" }}>
            <FormLabel>Цена</FormLabel>
            <RadioGroup
              onChange={(e) => fetchByParams("price_lte", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="Все" />
              <FormControlLabel
                value={100}
                control={<Radio />}
                label="до 99 сом"
              />
              <FormControlLabel
                value={200}
                control={<Radio />}
                label="до 199 сом"
              />
              <FormControlLabel
                value={300}
                control={<Radio />}
                label="до 299 сом"
              />
              <FormControlLabel
                value={500}
                control={<Radio />}
                label="до 499 сом"
              />
              <FormControlLabel
                value={1000}
                control={<Radio />}
                label="до 999 сом"
              />
              <FormControlLabel
                value={2100}
                control={<Radio />}
                label="до 2100 сом"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
