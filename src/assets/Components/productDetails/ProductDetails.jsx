import { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { addToLocalStorage } from "../../../utils";

const ProductDetails = () => {
  const { product_id } = useParams();
  console.log(product_id);
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    fetch("../gudget.json")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
  const filterProduct = allProduct.find(
    (product) => product_id === product.product_id.toString()
  );
  console.log(filterProduct);

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = filterProduct || {};

  return (
    <div className="hero h-80 mb-96 rounded-br-xl bg-[#9538E2] ">
      <div className="hero-content text-center">
        <div className="flex-col flex items-center text-center">
          <h1 className=" text-xl sm:text-2xl md:text-3xl text-white w-full sm:w-[70%]  font-bold">
            Product Details
          </h1>
          <p className=" text-white max-w-xl py-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <div className="hero bg-base-200  mt-8  mx-auto rounded-xl">
            <div className="hero-content flex-col sm:flex-row">
              <img
                src={product_image}
                className="w-[280px] bg-cover h-[350px] rounded-lg shadow-2xl"
              />
              <div className="my-4 text-left">
                <h1 className="text-3xl font-bold">{product_title}</h1>
                <h5 className="font-semibold text-lg">
                  Price : <span>{price}</span>
                </h5>
                <button
                  className={`rounded-full border-2 px-6 py-2 ${
                    availability === true
                      ? "bg-green-200 text-green-400   border-green-400"
                      : "bg-red-200 text-red-300 border-red-200"
                  }`}
                >
                  {`${availability === true ? " In Stock" : "Out of Stock"}`}
                </button>
                <p className="text-gray-400 ">{description}</p>

                <h3 className="text-xl my-1 font-semibold">Specification:</h3>
                <div>
                  {" "}
                  {Array.isArray(Specification) ? (
                    Specification.map((single) => (
                      <li key={single}>{single}</li>
                    ))
                  ) : (
                    <p>No specifications available</p>
                  )}
                </div>

                <h3 className="text-lg font-bold">Reating :</h3>
                <div>
                  <span>⭐⭐⭐⭐</span>
                  <span>{rating}</span>
                </div>
                <div className="flex gap-3 items-center mt-4">
                  <button
                    onClick={() => addToLocalStorage(filterProduct, "cart")}
                    className="btn bg-[#9538E2] hover:text-black text-white"
                  >
                    Add to Cart <IoCartOutline />
                  </button>
                  <button
                    onClick={() => addToLocalStorage(filterProduct, "wishList")}
                    className=" flex justify-center items-center border border-[#9538E2] rounded-full w-10 h-10 "
                  >
                    {" "}
                    <IoIosHeartEmpty className="text-xl text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
