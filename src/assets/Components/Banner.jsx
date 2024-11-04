import PropTypes from "prop-types";
const Banner = ({ title, subtitle }) => {
  return (
    <div className=" ">
      <div className="rounded-xl border-2 border-gray-200 p-1 bg-base-100">
        <div className="hero rounded-xl bg-[#9538E2] ">
          <div className="hero-content pt-20 sm:pt-28 pb-48 text-center">
            <div className="flex-col flex items-center text-center">
              <h1 className=" text-2xl sm:text-3xl md:text-5xl text-white w-full sm:w-[70%]  font-bold">
                {title}
              </h1>
              <p className=" text-white max-w-xl py-6">{subtitle}</p>
              <button className="btn rounded-2xl bg-white">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative  top-[-6rem] flex justify-center ">
        <figure className=" flex justify-center ">
          <img
            className="imageContainer border-2 border-gray-200 p-3 rounded-xl bg-transparent w-2/3 "
            src="https://i.ibb.co/sRStmcP/Rectangle-1.png"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};
Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Banner;
