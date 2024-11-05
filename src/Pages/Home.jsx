import { useLoaderData } from "react-router-dom";
import DynamicComponents from "../assets/Components/DynamicComponents";
import HeroImage from "../assets/Components/HeroImage";
import HeroBtn from "../assets/Components/HeroBtn";
const Home = () => {
  const catagories = useLoaderData();
  console.log(catagories);
  return (
    <div className="bg-base-200">
      <div className="relative  top-[-17rem] flex flex-col items-center justify-center">
        {/* hero img */}
        <HeroBtn></HeroBtn>
        <HeroImage></HeroImage>
      </div>
      {/* Dynamic nested components */}
      {/* Catagories section */}
      <DynamicComponents catagories={catagories}></DynamicComponents>
    </div>
  );
};

export default Home;
