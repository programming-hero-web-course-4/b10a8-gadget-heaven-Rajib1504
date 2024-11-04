const DynamicComponents = () => {
  return (
    <div className=" ">
      <h3 className="m-0 p-0  text-center text-3xl font-bold">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="grid mx-auto w-full sm:w-[80%] grid-cols-12 gap-4 border-2">
        <div className="catagories col-span-3 p-2 grid justify-center border-2 border-red-400 gap-2">
          <button className="btn btn-wide rounded-full">All Products</button>
          <button className="btn btn-wide rounded-full">Laptops</button>
          <button className="btn btn-wide rounded-full">Phones</button>
          <button className="btn btn-wide rounded-full">Accessories</button>
          <button className="btn btn-wide rounded-full">Smart Watches</button>
          <button className="btn btn-wide rounded-full">Macbook</button>
          <button className="btn btn-wide rounded-full">Iphone</button>
        </div>
        <div className="card-items col-span-9 border-2 w-full p-2 gap-3 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 border-blue-400">
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
