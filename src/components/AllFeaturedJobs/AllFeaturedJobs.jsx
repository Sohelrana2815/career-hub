import { useEffect, useState } from "react";
import FeaturedJobsCard from "../FeaturedJobsCard/FeaturedJobsCard";

const AllFeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const visibleJobs = showAll ? featuredJobs : featuredJobs.slice(0, 4);

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    fetch("allJobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data))
      .catch((error) => console.log("fetching error :", error));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mt-36 space-y-7">
        {visibleJobs.map((featuredJob) => (
          <FeaturedJobsCard
            key={featuredJob.id}
            featuredJob={featuredJob}
          ></FeaturedJobsCard>
        ))}
      </div>
      {
        <button
          onClick={handleShowAll}
          className={`btn btn-secondary mt-10 ${showAll ? "hidden" : ""}`}
        >
          Show all
        </button>
      }
    </div>
  );
};

export default AllFeaturedJobs;
