import SectionTitle from "../shared/SectionTitle";

import aboutImg1 from "../../assets/Home-page-about-section/deliv.png";
import aboutImg2 from "../../assets/Home-page-about-section/exp.png";
import aboutImg3 from "../../assets/Home-page-about-section/happy-c.png";
import aboutImg4 from "../../assets/Home-page-about-section/prof.png";
import ProjectInfo from "./ProjectInfo";

const AboutUs = () => {
  return (
    <div className="bg-white py-14 px-2">
      <div className="my-container">
        <div className="mx-auto w-full">
          <SectionTitle text={"about us"} number={""} />
        </div>

        <div className="mb-6">
          <p className="text-[30px] sm:text-[45px] md:text-[45px] text-center font-semibold leading-tight">
          We Empower Brands with Enhanced Digital Experiences
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center w-full ">
          <img
            src={aboutImg1}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
          <img
            src={aboutImg4}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
          <img
            src={aboutImg3}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
          <img
            src={aboutImg2}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
        </div>

        {/* project info  */}
        <ProjectInfo />
      </div>
    </div>
  );
};

export default AboutUs;
