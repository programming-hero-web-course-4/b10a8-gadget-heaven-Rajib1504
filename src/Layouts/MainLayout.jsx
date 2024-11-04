import { Outlet } from "react-router-dom";
import Footer from "../assets/Components/Footer";
import Nav from "../assets/Components/Nav";

const MainLayout = () => {
  return (
    <div>
      {/* nav */}
      <Nav></Nav>

      {/* Dynamic body */}

      <Outlet />
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
