import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h2 className="text-center text-7xl text-error">Error 404 not found!</h2>
      <Link to="/">
        <button className="btn btn-error text-white text-xl">Go back home</button>
      </Link>
    </div>
  );
};

export default Error;
