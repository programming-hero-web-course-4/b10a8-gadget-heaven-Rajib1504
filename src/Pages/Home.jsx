import { Outlet, useLoaderData } from "react-router-dom";
import HeroImage from "../assets/Components/HeroImage";
import HeroBtn from "../assets/Components/HeroBtn";
import HeroText from "../assets/Components/HeroText";
// import Card from "../assets/Components/Card";
import CategoriyBtn from "../assets/Components/CategoriyBtn";
const Home = () => {
  const catagories = useLoaderData();
  console.log(catagories);

  return (
    <div className="bg-base-200 ">
      <div className="relative  top-[-17rem] flex flex-col items-center justify-center">
        {/* hero img */}
        <HeroBtn></HeroBtn>
        <HeroImage></HeroImage>
      </div>

      <HeroText></HeroText>
      {/* Catagories section */}
      <div className="border-2 h-[50vh] grid grid-cols-12">
        {catagories.map((catagory) => (
          <CategoriyBtn
            key={catagory.product_id}
            categories={catagory}
          ></CategoriyBtn>
        ))}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
