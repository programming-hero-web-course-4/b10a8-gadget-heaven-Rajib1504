import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Banner = () => {
  return (
    <div className="hero rounded-br-xl bg-[#9538E2] h-[520px] ">
      <div className="hero-content text-center">
        <div className="flex-col flex items-center text-center">
          <h1 className=" text-2xl sm:text-3xl md:text-5xl text-white w-full sm:w-[70%]  font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className=" text-white max-w-xl py-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <Link to="/Dashbord" className="btn rounded-2xl mb-5 bg-white">
            Shop Now
          </Link>
          <img
            className="imageContainer border-2 border-gray-200 p-2 rounded-xl bg-transparent w-2/3 "
            src="https://i.ibb.co/sRStmcP/Rectangle-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Banner;
