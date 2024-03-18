import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Shop from "./Components/Shop";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import ShopCategory from "./Components/ShopCategory";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
import ShopContextProvider from "./Components/ShopContext";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <ShopContextProvider>
      <div className="container-fluid">
        <NavBar />
        <Outlet />
      </div>
    </ShopContextProvider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/category/men",
        element: <ShopCategory category="men" banner={men_banner} />,
      },
      {
        path: "/category/women",
        element: <ShopCategory category="women" banner={women_banner} />,
      },
      {
        path: "/category/kids",
        element: <ShopCategory category="kid" banner={kids_banner} />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default appRouter;
