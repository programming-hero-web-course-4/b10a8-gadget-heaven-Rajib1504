/* eslint-disable react/prop-types */
import { TiDeleteOutline } from "react-icons/ti";
import { removeFromLcalStorage } from "../../utils";
import { Link } from "react-router-dom";
const Wishlist = ({ item }) => {
  const { product_id, product_title, product_image, price, description } =
    item || {};
  return (
    <div>
      <div className="mt-4">
        <div className="border-2 p-3 w-[80%] items-center mx-auto rounded-xl flex flex-col justify-center md:flex-row md:justify-around mb-2">
          <figure>
            <img
              className="rounded-lg w-[250px] md:w-[170px]"
              src={product_image}
              alt=""
            />
          </figure>
          <div className="flex text-center md:text-left flex-col gap-2">
            <h2 className="text-3xl font-bold">{product_title}</h2>
            <p className="opacity-40">{description}</p>
            <h4 className="text-xl font-bold">
              <span>Price : $</span>
              <span>{price}</span>
            </h4>
            <Link>
              <button className="bg-[#9538E2] w-36 p-2 hover:bg-[#9538E2] btn rounded-full text-white">
                Add to cart
              </button>
            </Link>
          </div>
          <TiDeleteOutline className="text-xl font-light text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
