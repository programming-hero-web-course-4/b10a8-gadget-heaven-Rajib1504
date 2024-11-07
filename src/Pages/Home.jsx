import { Outlet, useLoaderData, useParams } from "react-router-dom";
import Banner from "../assets/Components/Banner";
import { useEffect } from "react";
import HeroText from "../assets/Components/HeroText";
import CategoriyBtn from "../assets/Components/CategoriyBtn";
const Home = () => {
  const catagories = useLoaderData();
  const { Categorys } = useParams();
  useEffect(() => {
    document.title = `Home | ${Categorys}`;
  }, [Categorys]);
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
