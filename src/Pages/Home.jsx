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
      <div className="border-2 md:min-h-[50vh] md:gap-10 md:my-12 md:grid-flow-col md:w-11/12 md:mx-auto sm:grid grid-flow-row gap-2 mx-w-[80%] text-center">
        <CategoriyBtn categories={catagories}></CategoriyBtn>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
