import { Outlet } from "react-router-dom";

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
    <div className="lg:w-[1600px] mx-auto mt-10">
      <Outlet context={{ jobCategoryContent, featuredJobsContent }} />
    </div>
  );
};

export default Root;
