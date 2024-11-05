import { useLoaderData } from "react-router-dom";
import DynamicComponents from "../assets/Components/DynamicComponents";
const Home = () => {
  const catagories = useLoaderData();
  console.log(catagories);
  return (
    <div className="bg-base-200">
      {/* hero img */}

      {/* Dynamic nested components */}
      {/* Catagories section */}
      <DynamicComponents catagories={catagories}></DynamicComponents>
    </div>
  );
};

export default Home;
