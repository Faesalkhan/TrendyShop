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
import Signup from "./Components/Signup";
import Product from "./Components/Product";
import { Provider } from "react-redux";
import { appStore } from "./Components/utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <NavBar />
      <Outlet />
    </Provider>
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
        path: "/men",
        element: <ShopCategory category="men" banner={men_banner} />,
      },
      {
        path: "/women",
        element: <ShopCategory category="women" banner={women_banner} />,
      },
      {
        path: "/kid",
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
      {
        path: "/product/:productID",
        element: <Product />,
      },
    ],
  },
]);
export default appRouter;
