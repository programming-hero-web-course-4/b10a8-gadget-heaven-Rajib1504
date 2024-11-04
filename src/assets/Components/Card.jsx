const Card = ({ catagory }) => {
  // console.log(catagory);
  const { price, product_title, product_image } = catagory;
  return (
    <div>
      {/* card  */}
      <div className="bg-base-100 w-[300px]  rounded-xl hover:scale-105 shadow-lg">
        <figure className="pt-5 px-5">
          <img
            src={product_image}
            alt={product_title}
            className="rounded-xl bg-center h-[170px]"
          />
        </figure>
        <div className="flex flex-col px-6 pt-3 gap-1 pb-5 rounded-xl items-start ">
          <h2 className="card-title font-bold">{product_title}</h2>
          <p className="opacity-80">
            price : <span>{price}</span>
          </p>
          <div className="">
            <button className="btn bg-transparent hover:bg-[#9538e2bb] border-1 border-[#9538e267] rounded-full mt-1 px-5 py-2 min-h-0 h-auto">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
