import { FaSort } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAllSavedData, removeFromLcalStorage } from "../utils";
import { Link, NavLink } from "react-router-dom";
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
  const handelShort = () => {
    const shortedPrice = [...cart].sort((a, b) => b.price - a.price);
    setCart(shortedPrice);
  };
  const amount = cart.reduce(
    (sum, newItem) => sum + parseFloat(newItem.price),
    0
  );
  useEffect(() => {
    document.title = `Dashboard | Gadget-World`;
  }, []);

  return (
    <div>
      <div className="bg-[#9538E2] text-center p-4">
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
        {display === "cart" ? (
          <div>
            <div className="flex justify-between items-center mx-auto w-11/12 my-2">
              <h3 className="font-bold text-3xl mt-2  ">Cart</h3>
              <div className="flex items-center gap-2 ">
                <h4 className="font-bold text-2xl ">
                  Total cost : $ <span>{amount}</span>
                </h4>
                <button
                  onClick={handelShort}
                  className=" w-36 p-2 rounded-full border-2 btn bg-transparent hover:bg-transparent text-[#9538E2] border-[#9538E2] flex items-center justify-center"
                >
                  <span> Sort by</span> <FaSort />
                </button>
                <button
                  disabled={cart.length < 1}
                  onClick={() => {
                    localStorage.removeItem("cart");
                    document.getElementById("my_modal_1").showModal();
                  }}
                  className="bg-[#9538E2] w-36 p-2 hover:bg-[#9538E2] btn rounded-full text-white"
                >
                  Purchase
                </button>
              </div>
            </div>
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
            <div className="w-11/12 mx-auto">
              <h3 className="font-bold text-3xl mt-2">Wish List</h3>
            </div>
            {wishList.map((item) => (
              <Wishlist key={item.product_id} item={item}></Wishlist>
            ))}
          </div>
        )}
        {/* <Outlet></Outlet> */}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box p-4">
          <img
            className="w-20 mx-auto mb-4"
            src="https://i.ibb.co/Jn00V6s/Group.png"
            alt=""
          />
          {/* <h3 className="font-bold text-lg">Hello!</h3> */}
          <div className="flex flex-col text-center justify-center items-center">
            <h2 className="text-4xl font-bold ">Payment Successful</h2>
            <p className="opacity-40 font-semibold">Thanks for purchasing</p>
            <p className="font-semibold">
              Total : <span>{amount}</span>
            </p>
          </div>
          <div className="modal-action mt-3">
            <form method="dialog w-full">
              <Link to="/home" className="btn btn-wide  rounded-full">
                Close
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashbord;
