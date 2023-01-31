import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./Auth.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © Ti-Tan Books "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Auth() {
  const navigate = useNavigate();

  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleLogin,
    handleLogout,
    handleSignUp,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.561)",
          border: "solid 1px",
          margin: "40px auto",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <HowToRegIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {hasAccount ? <>Войти</> : <>Регистрация</>}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={emailError}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={passwordError}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить меня"
            />
            {hasAccount ? (
              <Button
                className="btn-auth"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#1E434c" }}
                onClick={() => {
                  handleLogin();
                  // navigate("/");
                }}
              >
                Войти
              </Button>
            ) : (
              <Button
                className="btn-auth"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#1E434c" }}
                onClick={() => {
                  handleSignUp();
                  // navigate("/");
                }}
              >
                Регистрация
              </Button>
            )}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="#1E434c">
                  Забыли пароль?
                </Link>
              </Grid>
              <Grid item>
                {hasAccount ? (
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ color: "#1E434c" }}
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {"У вас нет аккаунта? Создать"}
                  </Link>
                ) : (
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ color: "#1E434c" }}
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {"У вас есть аккаунт? Войти "}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
