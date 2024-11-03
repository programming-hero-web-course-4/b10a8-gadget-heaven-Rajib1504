import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashbord from "../Pages/Dashbord";
import Statistics from "../Pages/Statistics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        // index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Dashbord",
        element: <Dashbord></Dashbord>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);
export default router;
