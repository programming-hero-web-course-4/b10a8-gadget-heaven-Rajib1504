import { Outlet } from "react-router-dom";
import Footer from "../assets/Components/Footer";
import Nav from "../assets/Components/Nav";

const MainLayout = () => {
  return (
    <div>
      <div>
        {/* nav */}
        <Nav></Nav>
      </div>
      {/* Dynamic nested component  */}
      <Outlet />

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
