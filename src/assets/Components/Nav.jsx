import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <div className="rounded-xl rounded-b-none border-2 border-b-0 mt-2 border-gray-200 p-1 pb-0 bg-base-100">
      <div
        className={`navbar rounded-xl border-x-2 border-t-2 px-2 rounded-b-none border-gray-200 p-2 mx-w-[1511px] w-[1510px] mx-auto ${
          pathname === "/home" ? "bg-[#9538E2] text-white" : " "
        } `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn text-white btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke={`${pathname === "/home" ? "white" : "black"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black "
            >
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/Dashbord"}>Dashbord</Link>
              </li>
              <li>
                <Link to={"/Statistics"}>Statistics</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost hover:bg-transparent  font-bold text-2xl">
            Gadget World
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 font-semibold px-1">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/Dashbord"}>Dashbord</Link>
            </li>
            <li>
              <Link to={"/Statistics"}>Statistics</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end  gap-2 sm:gap-4">
          <a className="rounded-full bg-white  p-1">
            <IoCartOutline className="text-xl text-black" />
          </a>
          <a className="rounded-full bg-white  p-1 ">
            {" "}
            <IoIosHeartEmpty className="text-xl text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
