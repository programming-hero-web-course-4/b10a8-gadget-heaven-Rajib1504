/* eslint-disable react/prop-types */
import "./category.css";
import { NavLink } from "react-router-dom";

const CategoriyBtn = ({ categories }) => {
  return (
    <div
      id="navlinks"
      className="col-span-2 flex md:flex-col gap-4 flex-wrap justify-center md:gap-2 h-fit bg-white md:w-fit p-4 rounded-xl items-center  "
    >
      {categories.map((category) => (
        <NavLink
          className="btn hover:bg-[#9538E2] hover:text-white my-2 md:my-4 w-32 md:w-44 text-center "
          key={category.category}
          to={`/home/product/${category.category}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoriyBtn;
