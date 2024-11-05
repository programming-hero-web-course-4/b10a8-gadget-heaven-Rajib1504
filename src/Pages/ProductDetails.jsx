/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductDetails = ({ catagory }) => {
  //   console.log(typeof catagory);

  return (
    <button className="btn p-4 px-6 btn-outline bg-base-200 border-0 hover:bg-[#9538E2] hover:border-0  rounded-xl">
      <Link to="/cards">{catagory.category}</Link>
    </button>
  );
};
ProductDetails.propTypes = {
  ProductDetails: PropTypes.object,
};
export default ProductDetails;
