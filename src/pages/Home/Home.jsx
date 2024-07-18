import PropTypes from "prop-types";
import Banner from "../../components/Banner/Banner";

import Navbar from "../../shared/Navbar/Navbar";
import JobCategoryList from "../../components/JobCategoryList/JobCategoryList";
import { useOutletContext } from "react-router-dom";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";

const Home = () => {
  const context = useOutletContext();
  if (!context) {
    return null;
  }
  const { jobCategoryContent, featuredJobsContent } = context;
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <JobCategoryList
        title={jobCategoryContent.title}
        description={jobCategoryContent.description}
      />
      <FeaturedJobs
        title={featuredJobsContent.title}
        description={featuredJobsContent.description}
      />
    </div>
  );
};

Home.propTypes = {
  jobCategoryContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  featuredJobsContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Home;
