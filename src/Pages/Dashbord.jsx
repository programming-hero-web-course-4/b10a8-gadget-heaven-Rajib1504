import { FaSort } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAllSavedData } from "../utils";
import { NavLink, Outlet } from "react-router-dom";
import CartList from "../assets/Components/CartList";
import Wishlist from "../assets/Components/Wishlist";

const Dashbord = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [display, setDisplay] = useState("cart");
  useEffect(() => {
    const cartData = getAllSavedData("cart");
    const wishData = getAllSavedData("wishList");
    setCart(cartData);
    setWishList(wishData);
  }, []);

  return (
    <div>
      <div className=" w-[100vw] bg-[#9538E2] text-center p-4">
        <div className="flex-col flex items-center m-3 text-center">
          <h1 className=" text-xl sm:text-2xl md:text-3xl text-white w-full sm:w-[70%]  font-bold">
            Dashboard
          </h1>
          <p className=" text-white max-w-2xl py-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex gap-3">
            <NavLink
              to="/Dashbord/cart"
              onClick={() => setDisplay("cart")}
              className={({ isActive }) =>
                `btn w-32 rounded-full text-bold ${
                  isActive
                    ? " bg-white text-[#9538E2]"
                    : " text-white bg-transparent border  border-white"
                }`
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/Dashbord/wishlist"
              onClick={() => setDisplay("wishList")}
              className={({ isActive }) =>
                `btn w-32 rounded-full text-bold ${
                  isActive
                    ? " bg-white text-[#9538E2]"
                    : "text-white bg-transparent border border-white"
                }`
              }
            >
              Wish List
            </NavLink>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center my-2">
          <h3 className="font-bold text-2xl ">Cart</h3>
          <div className="flex items-center gap-2 ">
            <h4 className="font-bold text-2xl ">
              Total cost : $ <span>{totalPrice}</span>
            </h4>
            <button className=" w-36 p-2 rounded-full border-2 btn bg-transparent hover:bg-transparent text-[#9538E2] border-[#9538E2] flex items-center justify-center">
              <span> Sort by</span> <FaSort />
            </button>
            <button className="bg-[#9538E2] w-36 p-2 hover:bg-[#9538E2] btn rounded-full text-white">
              Purchase
            </button>
          </div>
        </div>

        {display === "cart" ? (
          <div>
            {cart.map((scart) => (
              <CartList
                key={scart.product_id}
                scart={scart}
                cart={cart}
                setCart={setCart}
              ></CartList>
            ))}
          </div>
        ) : (
          <div>
            {wishList.map((item) => (
              <Wishlist
                key={item.product_id}
                item={item}
                cart={cart}
                setCart={setCart}
              ></Wishlist>
            ))}
          </div>
        )}
        {/* <Outlet></Outlet> */}
      </div>
    </div>
  );
};

export default Dashbord;
