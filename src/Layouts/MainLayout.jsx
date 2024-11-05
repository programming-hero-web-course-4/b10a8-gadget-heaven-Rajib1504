import { Outlet } from "react-router-dom";
import Footer from "../assets/Components/Footer";
import Nav from "../assets/Components/Nav";
import Banner from "../assets/Components/Banner";
const MainLayout = () => {
  return (
    <div>
      <div className="rounded-xl border-2 p-1 border-gray-300  bg-base-100 ">
        {" "}
        {/* nav */}
        <Nav></Nav>
        {/* Banner */}
        <Banner
          title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Banner>
      </div>
      {/* Dynamic nested component  */}
      <Outlet />

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
