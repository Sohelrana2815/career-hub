import PropTypes from "prop-types";
import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
const FeaturedJobsCard = ({ featuredJob }) => {
  const { logo, jobTitle, company, type, location, salary, category } =
    featuredJob;
  return (
    <>
      <div className="card card-compact bg-base-100  shadow-xl ">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{jobTitle}</h2>
          <p className="text-start text-lg">{company}</p>
          <div className="card-actions space-x-4 mt-3 ">
            <button className="btn btn-outline btn-sm ">{type}</button>
            <button className="btn btn-outline btn-sm ">{category}</button>
          </div>
          <div className="flex justify-between py-4">
            <p className="flex items-center text-lg">
              <FaLocationDot className="text-xl mr-2" /> {location}
            </p>
            <p className="flex items-center text-lg">
              <FaDollarSign className="text-xl mr-2" />
              {salary}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

FeaturedJobsCard.propTypes = {
  featuredJob: PropTypes.object.isRequired,
};

export default FeaturedJobsCard;