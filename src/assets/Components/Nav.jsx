import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="mt-5">
      <div className="navbar bg-transparent">
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
                stroke="white"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/Statistics"}>Statistics</NavLink>
              </li>
              <li>
                <NavLink to={"/Dashbord"}>Dashbord</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost hover:bg-transparent text-white font-bold text-2xl">
            Gadget World
          </a>
        </div>
        <div className="navbar-center text-white hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 font-semibold px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/Statistics"}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to={"/Dashbord"}>Dashbord</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="rounded-full bg-white  p-1">
            <IoCartOutline className="text-xl" />
          </a>
          <a className="rounded-full bg-white  p-1 ">
            {" "}
            <IoIosHeartEmpty className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
