import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className=" text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h4 className="text-md">Error has found</h4>
      <button className="btn">
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
