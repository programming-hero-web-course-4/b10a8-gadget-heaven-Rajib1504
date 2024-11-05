import PropTypes from "prop-types";
// import Card from "./Card";
import ProductDetails from "../../Pages/ProductDetails";
const DynamicComponents = ({ catagories }) => {
  console.log(catagories);
  return (
    <div className=" ">
      <h3 className="m-0 p-0  text-center text-3xl font-bold">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="grid mx-auto mt-5 grid-flow-row sm:grid-flow-col w-full sm:w-[80%] sm:grid-cols-12 gap-2 ">
        {/* catagories btns  */}
        <div className=" sm:col-span-2 p-3 flex sm:grid items-center flex-wrap justify-center gap-2  rounded-xl bg-white">
          {catagories.map((catagory) => (
            <ProductDetails
              key={catagory.product_id}
              catagory={catagory}
            ></ProductDetails>
          ))}
        </div>
        {/* card area  */}
        <div className="card-items sm:col-span-10 w-full p-2 gap-2 gap-x-0  grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {/* {catagories.map((catagory) => (
            <Card key={catagory.product_id} catagory={catagory}></Card>
          ))} */}
        </div>
      </div>
    </div>
  );
};
DynamicComponents.propTypes = {
  catagories: PropTypes.array,
};
export default DynamicComponents;
