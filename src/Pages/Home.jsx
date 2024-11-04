import Banner from "../assets/Components/Banner";
import DynamicComponents from "../assets/Components/DynamicComponents";

const Home = () => {
  return (
    <div>
      {/* banner with btn & hero img */}
      <Banner
        title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></Banner>

      {/* title */}
      {/* Dynamic nested components */}

      <DynamicComponents></DynamicComponents>

      {/* Catagories section */}
    </div>
  );
};

export default Home;
