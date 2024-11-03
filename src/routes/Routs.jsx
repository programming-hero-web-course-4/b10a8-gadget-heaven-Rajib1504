import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
// import Home from "../Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  // {
  //   path: "/",
  //   element: <Home></Home>,
  // },
]);
export default router;
