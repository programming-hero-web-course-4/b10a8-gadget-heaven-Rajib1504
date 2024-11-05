import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashbord from "../Pages/Dashbord";
import Statistics from "../Pages/Statistics";
import ErrorPage from "../Pages/ErrorPage";
import Card from "../assets/Components/Card";
import Products from "../assets/Components/Products";

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
            path: "/home/product/:Categorys",
            element: <Products></Products>,
            loader: () => fetch("/gudget.json"),
          },
        ],
      },
      {
        path: "/Dashbord",
        element: <Dashbord></Dashbord>,
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
