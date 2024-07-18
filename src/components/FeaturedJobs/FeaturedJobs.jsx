import PropTypes from "prop-types";
import AllFeaturedJobs from "../AllFeaturedJobs/AllFeaturedJobs";
const FeaturedJobs = ({ title, description }) => {
  return (
    <div className="text-center mt-20 space-y-6">
      <h2 className="text-5xl font-extrabold">{title}</h2>
      <p className=" text-lg font-medium">{description}</p>
      <AllFeaturedJobs></AllFeaturedJobs>
    </div>
  );
};

FeaturedJobs.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeaturedJobs;
