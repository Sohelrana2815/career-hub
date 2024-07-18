import { useEffect, useState } from "react";
import JobCategoryCard from "../JobCategoryCard/JobCategoryCard";

const JobCategories = () => {
  const [jobCards, setJobCards] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobCards(data))
      .catch((error) => console.log("fetching error :", error));
  }, []);

  return (
    <div>
      <div className="flex gap-6 mt-36">
        {jobCards.map((jobCard) => (
          <JobCategoryCard key={jobCard.id} jobCard={jobCard}></JobCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
