import { useLoaderData, useParams } from "react-router-dom";
import BannerDetails from "../../components/BannerDetails/BannerDetails";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  if (!job) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  return (
    <div>
      <BannerDetails />

      <div className="flex gap-5 items-center justify-center h-screen">
        <div className="w-3/4 border-4 p-8 h-1/2">
          <h2 className="text-2xl">Job Description</h2>
          <p>{job.description}</p>
          <h2 className="text-2xl mt-4">Job Responsibilities</h2>
          {job.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
          <h2 className="text-2xl mt-4">Educational Requirements</h2>
          <p>{job.educationalRequirement}</p>
          <h2 className="text-2xl mt-4">Experience</h2>
          <p>{job.experience}</p>
        </div>
        <div className="w-1/4 border-4 h-1/2 p-8 space-y-4">
          <h2 className="text-2xl">Contact Information</h2>
          <p>
            <strong>Phone:</strong> {job.contactInfo.phone}
          </p>
          <p>
            <strong>Email:</strong> {job.contactInfo.email}
          </p>
          <p>
            <strong>Address:</strong> {job.contactInfo.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
