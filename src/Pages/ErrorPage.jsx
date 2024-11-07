import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <div className=" text-center w-fit mx-auto ">
        <h1 className="text-9xl font-extrabold text-red-200">404</h1>
        <h4 className="text-md text-2xl font-semibold mb-2">Page Not Found</h4>
        <Link to="/home">
          <button className="btn bg-[#9538E2] rounded-xl px-4 text-white w-fit">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
