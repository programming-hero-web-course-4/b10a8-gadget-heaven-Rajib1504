import { NavLink } from "react-router-dom";

const DynamicComponents = ({ catagories }) => {
  console.log(catagories);
  return (
    <div className=" ">
      <h3 className="m-0 p-0  text-center text-3xl font-bold">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="grid mx-auto mt-5 grid-flow-row sm:grid-flow-col w-full sm:w-[80%] sm:grid-cols-12 gap-4 ">
        <div className="catagories  sm:col-span-3 p-3 flex sm:grid items-center flex-wrap justify-center gap-2  rounded-xl bg-white">
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0  rounded-full">
            <NavLink to={"/"}>All Products</NavLink>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <NavLink to={"/laptops"}> Laptops</NavLink>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <NavLink to={"/phones"}> Phones</NavLink>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <NavLink to={"/acessories"}> Accessories</NavLink>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <NavLink to={"/watches"}> Smart Watches</NavLink>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <NavLink to={"/macbook"}> Macbook</NavLink>
          </button>
          <button className="btn p-4 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0 rounded-full">
            <NavLink to={"/iphone"}>Iphone</NavLink>
          </button>
        </div>
        <div className="card-items sm:col-span-9 w-full p-2 gap-3 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {/* card  */}
          <div className="bg-base-100 h-fit rounded-xl hover:scale-105 shadow-lg">
            <figure className="pt-5 px-5">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="flex flex-col px-6 pt-3 gap-1 pb-5 rounded-xl items-start ">
              <h2 className="card-title font-bold">Shoes!</h2>
              <p className="opacity-80">
                price : <span>$100</span>
              </p>
              <div className="">
                <button className="btn bg-transparent hover:bg-[#9538e2bb] border-1 border-[#9538e267] rounded-full mt-1 px-5 py-2 min-h-0 h-auto">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicComponents;
