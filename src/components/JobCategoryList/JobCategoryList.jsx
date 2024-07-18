import PropTypes from "prop-types";
import JobCategories from "../JobCategories/JobCategories";
const JobCategoryList = ({ title, description }) => {
  return (
    <div className="text-center mt-36 space-y-6">
      <h2 className="text-5xl font-extrabold">{title}</h2>
      <p className=" text-lg font-medium">{description}</p>

      <JobCategories />
    </div>
  );
};

JobCategoryList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default JobCategoryList;
