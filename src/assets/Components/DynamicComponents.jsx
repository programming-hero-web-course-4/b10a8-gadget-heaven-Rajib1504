import { Link } from "react-router-dom";
import Card from "./Card";

const DynamicComponents = ({ catagories }) => {
  console.log(catagories);
  return (
    <div className=" ">
      <h3 className="m-0 p-0  text-center text-3xl font-bold">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="grid mx-auto mt-5 grid-flow-row sm:grid-flow-col w-full sm:w-[80%] sm:grid-cols-12 gap-2 ">
        {/* catagories btns  */}
        <div className="catagories  sm:col-span-2 p-3 flex sm:grid items-center sm:h-[35%] flex-wrap justify-center gap-2  rounded-xl bg-white">
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0  rounded-full">
            <Link className="active" to={"/home"}>
              All Products
            </Link>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <Link to={"/"}> Laptops</Link>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <Link to={"/phones"}> Phones</Link>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <Link to={"/acessories"}> Accessories</Link>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <Link to={"/watches"}> Smart Watches</Link>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <Link to={"/macbook"}> Macbook</Link>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <Link to={"/iphone"}>Iphone</Link>
          </button>
        </div>
        {/* card area  */}
        <div className="card-items sm:col-span-10 w-full p-2 gap-2 gap-x-0  grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {catagories.map((catagory) => (
            <Card key={catagory.product_id} catagory={catagory}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicComponents;
