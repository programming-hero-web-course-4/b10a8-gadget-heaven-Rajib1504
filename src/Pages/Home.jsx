import { useLoaderData } from "react-router-dom";
import Banner from "../assets/Components/Banner";
// import DynamicComponents from "../assets/Components/DynamicComponents";

const Home = () => {
  const catagories = useLoaderData();
  console.log(catagories);
  return (
    <div className="bg-base-200">
      im the home
      {/* banner with btn & hero img */}
      <Banner
        title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></Banner>
      {/* title */}
      {/* Dynamic nested components */}
      {/* Catagories section */}
      {/* <DynamicComponents
        key={catagories.product_id}
        catagories={catagories}
      ></DynamicComponents> */}
    </div>
  );
};

export default Home;
