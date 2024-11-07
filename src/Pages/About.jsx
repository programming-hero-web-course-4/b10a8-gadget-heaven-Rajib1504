const About = () => {
  return (
    <div>
      <div>
        <div className="bg-[#9538E2] text-center p-4 mb-4">
          <div className="flex-col flex items-center m-3 text-center">
            <h1 className=" text-xl sm:text-2xl md:text-3xl text-white w-full sm:w-[70%]  font-bold">
              About Us
            </h1>
            <p className=" text-white max-w-2xl py-5">
              Welcome to Gadget World—your destination for premium laptops,
              mobiles, drones, and cameras. Discover the latest tech, tailored
              to fit every budget, with top-notch quality and service. Explore
              today!
            </p>
          </div>
        </div>
        {/* next section  */}
        <div className="mb-4 w-11/12 mx-auto">
          <h3 className="text-3xl text-gray-500 font-bold">
            Mission and Vision :
          </h3>
          <p className="opacity-55">
            At{" "}
            <span className="text-[#9538E2] text-lg font-semibold">
              Gadget World{" "}
            </span>{" "}
            , our vision is to make cutting-edge technology accessible and
            trusted by everyone. We aim to be the go-to place for high-quality
            gadgets, offering top-notch service and competitive prices. Our goal
            is to enhance daily life with innovative products and build lasting
            customer relationships.
          </p>
          <div className="py-4">
            <h3 className="text-3xl text-gray-500 font-bold">Why Choose Us</h3>
            <p className="opacity-55 pb-5 border-b-2">
              At{" "}
              <span className="text-[#9538E2] text-lg font-semibold">
                Gadget World{" "}
              </span>{" "}
              , we prioritize quality, variety, and customer satisfaction. Find
              the latest gadgets at competitive prices, backed by reliable
              service and support. Choose us for a seamless tech-shopping
              experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
