import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import { useAuth } from "../context/authContextProvider";
import { ADMIN } from "../helpers/consts";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import ContactsPage from "../pages/ContactsPage";
import EditProductPage from "../pages/EditProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import PayCartPage from "../pages/PayCartPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage"
const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/auth",
      element: <AuthPage/>,
      id: 2,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 4,
    },
    {
      link: "/About",
      element: <AboutUs />,
      id: 5,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 6,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 7,
    },
    {
      link: "/contacts",
      element: <ContactsPage />,
      id: 8,
    },
    {
      link: "/paycard",
      element: <PayCartPage />,
      id: 9,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
