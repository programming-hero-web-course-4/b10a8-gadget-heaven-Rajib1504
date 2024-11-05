/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoriyBtn = ({ categories }) => {
  const { category } = categories;
  return (
    <div className="col-span-3">
      {" "}
      <Link to="/category">
        <button className="btn btn-wide">{category}</button>
      </Link>
    </div>
  );
};

export default CategoriyBtn;
