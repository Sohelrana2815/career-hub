import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/utility";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobs.length > 0) {
      //   const jobsApplied = jobs.filter((job) => storedJobsId.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobsId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      //   console.log(jobs, storedJobsId);
    }
  }, []);
  return (
    <>
      <div>
        <h2>Applied Jobs : {appliedJobs.length}</h2>{" "}
        <details className="dropdown">
          <summary className="btn m-1">open or close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Remote</a>
            </li>
            <li>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
        <div>
          <ul>
            {appliedJobs.map((job) => (
              <li key={job.id}>
                <p>{job.jobTitle} {job.company} : {job.type}</p>
               
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

AppliedJobs.propTypes = {};

export default AppliedJobs;
