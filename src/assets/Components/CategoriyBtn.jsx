/* eslint-disable react/prop-types */
import "./category.css";
import { NavLink } from "react-router-dom";

const CategoriyBtn = ({ categories }) => {
  return (
    <div
      id="navlinks"
      className="col-span-2 flex flex-col gap-2 h-fit bg-white w-fit p-4 rounded-xl items-center  "
    >
      {categories.map((category) => (
        <NavLink
          className="btn hover:bg-[#9538E2] hover:text-white my-4  w-44 text-center "
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
