import { useEffect, useState } from "react";
import FeaturedJobsCard from "../FeaturedJobsCard/FeaturedJobsCard";

const AllFeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch("allJobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data))
      .catch((error) => console.log("fetching error :", error));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mt-36 space-y-7">
        {featuredJobs.map((featuredJob) => (
          <FeaturedJobsCard
            key={featuredJob.id}
            featuredJob={featuredJob}
          ></FeaturedJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AllFeaturedJobs;
