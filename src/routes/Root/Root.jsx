import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Navbar/Footer/Footer";

const Root = () => {
  const jobCategoryContent = {
    title: "Job Categories",
    description: "Explore various job categories tailored to your skills.",
  };
  const featuredJobsContent = {
    title: "Featured Jobs",
    description: "Check out the featured jobs that match your profile.",
  };

  return (
    <>
      <div className="lg:w-[1600px] mx-auto mt-10 min-h-screen ">
        <Navbar></Navbar>
        <Outlet context={{ jobCategoryContent, featuredJobsContent }} />
      </div>
      <div className="mt-36">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
