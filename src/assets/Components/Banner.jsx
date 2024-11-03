const Banner = () => {
  return (
    <div className="relative top-[-6rem] z-20 ">
      <div className="rounded-xl border-2 border-gray-200 p-1 bg-base-100">
        <div className="hero rounded-xl bg-[#9538E2] ">
          <div className="hero-content pt-28 pb-48 text-center">
            <div className="max-w-lg">
              <h1 className="text-5xl text-white font-bold">Hello there</h1>
              <p className=" text-white py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn rounded-2xl bg-white">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative top-[-11rem] flex justify-center ">
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

export default Banner;
