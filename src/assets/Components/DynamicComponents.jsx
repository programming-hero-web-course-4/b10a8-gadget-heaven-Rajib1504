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
        <div className="card-items col-span-9 border-2  border-blue-400"></div>
      </div>
    </div>
  );
};

export default DynamicComponents;
