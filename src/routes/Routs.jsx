import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashbord from "../Pages/Dashbord";
import Statistics from "../Pages/Statistics";
import ErrorPage from "../Pages/ErrorPage";
import Card from "../assets/Components/Card";
import Products from "../assets/Components/Products";
import ProductDetails from "../assets/Components/productDetails/ProductDetails";
import CartList from "../assets/Components/CartList";
import Wishlist from "../assets/Components/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        // index: true,
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("/Categories.json"),
        children: [
          {
            path: "/home",
            element: (
              <Navigate to="/home/product/acessories" replace></Navigate>
            ),
          },
          {
            path: "/home/product/:Categorys",
            element: <Products></Products>,
          },
        ],
      },

      {
        path: "/Dashbord",
        element: <Dashbord></Dashbord>,
        children: [
          {
            path: "/Dashbord/cart",
            element: <CartList></CartList>,
          },
          {
            path: "/Dashbord/wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/productDetails/:product_id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/category",
        element: <Card></Card>,
      },
    ],
  },
]);
export default router;
