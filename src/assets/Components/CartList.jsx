import { TiDeleteOutline } from "react-icons/ti";
import { removeFromLcalStorage } from "../../utils";
const CartList = ({ scart, setCart, cart }) => {
  //   console.log(scart);
  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = scart || {};

  return (
    <div className="mt-4">
      <div className="border-2 p-3 w-[80%] items-center text-center md:text-left mx-auto rounded-xl flex flex-col justify-center md:flex-row md:justify-around mb-2">
        <figure>
          <img
            className=" rounded-lg w-[250px] md:w-[170px]"
            src={product_image}
            alt=""
          />
        </figure>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">{product_title}</h2>
          <p className="opacity-40">{description}</p>
          <h4 className="text-xl font-bold">
            <span>Price : $</span>
            <span>{price}</span>
          </h4>
        </div>
        <TiDeleteOutline
          onClick={() => {
            removeFromLcalStorage("cart", product_id);
            const remainingProducts = cart.filter(
              (item) => item.product_id !== product_id
            );
            setCart(remainingProducts);
          }}
          className="4xl md:text-5xl font-light text-red-600"
        />
      </div>
    </div>
  );
};

export default CartList;
