import PropTypes from "prop-types";
const Banner = ({ title, subtitle }) => {
  return (
    <div className=" ">
      <div className="">
        <div className="hero rounded-br-xl bg-[#9538E2] ">
          <div className="hero-content pb-52 text-center">
            <div className="flex-col flex items-center text-center">
              <h1 className=" text-2xl sm:text-3xl md:text-5xl text-white w-full sm:w-[70%]  font-bold">
                {title}
              </h1>
              <p className=" text-white max-w-xl py-6 pb-16">{subtitle}</p>
            </div>
          </div>
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
