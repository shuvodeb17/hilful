import CustomerReview from "../components/CustomerReview";
import HeroSection from "../components/HeroSection";
import OurTeamInfo from "../components/OurTeamInfo/OurTeamInfo";
import AboutUs from "./aboutUs/AboutUs";
import OurServices from "./services/OurServices";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <AboutUs />
      <OurServices />
      <OurTeamInfo num={""} />
      <CustomerReview />
    </div>
  );
};

export default Home;
