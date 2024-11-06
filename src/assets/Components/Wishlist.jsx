import { TiDeleteOutline } from "react-icons/ti";
import { removeFromLcalStorage } from "../../utils";
const Wishlist = ({ item, setCart, cart }) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = item || {};
  return (
    <div>
      <div className="mt-4">
        <div className="border-2 p-3 w-[80%] items-center mx-auto rounded-xl flex justify-around mb-2">
          <figure>
            <img className="w-[170px]" src={product_image} alt="" />
          </figure>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">{product_title}</h2>
            <p className="opacity-40">{description}</p>
            <h4 className="text-xl font-bold">
              <span>Price : $</span>
              <span>{price}</span>
            </h4>
            <button className="bg-[#9538E2] w-36 p-2 hover:bg-[#9538E2] btn rounded-full text-white">
              Add to cart
            </button>
          </div>
          <TiDeleteOutline
            onClick={() => {
              removeFromLcalStorage("cart", product_id);
              const remainingProducts = cart.filter(
                (item) => item.product_id !== product_id
              );
              setCart(remainingProducts);
            }}
            className="text-5xl font-light text-red-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
