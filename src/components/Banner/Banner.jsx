import bannerImg from "../../assets/images/user.png";
const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center  p-6 rounded-lg shadow-sm">
        {/* Left side: Text */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            One Step Closer To Your Dream Job
          </h1>
          <p className="text-lg">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className=" btn bg-gradient-to-r from-indigo-400 to-violet-500 text-white py-3 mt-8 px-6 rounded-md shadow-md hover:shadow-lg">
            Get Started
          </button>
        </div>
        {/* Right side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src={bannerImg} alt="Banner" className="rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default Banner;
