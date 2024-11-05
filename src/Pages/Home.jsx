import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../assets/Components/Banner";
import HeroText from "../assets/Components/HeroText";
// import Card from "../assets/Components/Card";
import CategoriyBtn from "../assets/Components/CategoriyBtn";
const Home = () => {
  const catagories = useLoaderData();
  // console.log(catagories);

  return (
    <div className="bg-base-200 ">
      <Banner></Banner>
      <HeroText></HeroText>
      {/* Catagories section */}
      <div className="border-2 min-h-[50vh] gap-10 my-12 grid-flow-col w-11/12 mx-auto grid">
        <CategoriyBtn categories={catagories}></CategoriyBtn>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
