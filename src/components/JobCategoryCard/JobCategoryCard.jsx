import PropTypes from "prop-types";
const JobCategoryCard = ({ jobCard }) => {
  // console.log(jobCard);
  const { logo, title, jobsAvailable } = jobCard;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo} alt="Logo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{jobsAvailable} jobs available</p>
        </div>
      </div>
    </>
  );
};

JobCategoryCard.propTypes = {
  jobCard: PropTypes.object.isRequired,
};

export default JobCategoryCard;
