/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const CategoriyBtn = ({ categories }) => {
  return (
    <div className="col-span-2 flex flex-col gap-2 h-fit bg-white w-fit p-4 rounded-xl items-center  ">
      {categories.map((category) => (
        <NavLink key={category.category} to={`/home/product/${category}`}>
          <button className="btn hover:bg-[#9538E2] hover:text-white my-4  w-44 text-center ">
            {" "}
            {category.category}
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default CategoriyBtn;
