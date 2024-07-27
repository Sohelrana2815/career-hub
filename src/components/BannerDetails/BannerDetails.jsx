import bannerImg1 from "../../assets/images/bg1.png";
import bannerImg2 from "../../assets/images/bg2.png";
const BannerDetails = () => {
  return (
    <>
      <div className="flex justify-between mt-10 relative">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-3xl font-bold">Job Details</h1>
        </div>
        <div className="relative">
          <img src={bannerImg1} alt="" />
        </div>
        <div className="relative">
          <img src={bannerImg2} alt="" />
        </div>
      </div>
    </>
  );
};

export default BannerDetails;
