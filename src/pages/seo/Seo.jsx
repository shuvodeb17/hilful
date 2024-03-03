import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import OurProcessSeo from "../services/Seo/OurProcessSeo";
import ServicesSeo from "../services/Seo/ServicesSeo";
import seoImage from '../../assets/update/SEO/seo-main.jpg'
// import SectionTitle from "../shared/SectionTitle";

const Seo = () => {
  const navItems = [
    {
      label: "Keyword Research",
      to: "#",
    },
    {
      label: "Competitors Analysis",
      to: "#",
    },
    {
      label: "On Page SEO",
      to: "#",
    },
    {
      label: "Off Page SEO",
      to: "#",
    },
    {
      label: "Backlink Analyzing",
      to: "#",
    },
  ];
  return (
    <section className="my-container">
      <header className="items-center grid-cols-4 gap-10 py-8 space-y-4 lg:grid lg:space-y-0 lg:py-20">
        <div className="col-span-2 space-y-4">
          <h3 className="text-3xl md:text-left font-semibold leading-tight lg:text-4xl text-justify">
            Accelerate your online growth with sophisticated SEO solutions
          </h3>
          <p className="font-semibold text-start md:text-left">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to='/orders'>
              <Fade className="flex justify-center md:justify-start mt-5" duration={1800} direction="up">
                <button className="bg-[#444CFC] px-5 py-2 rounded-full text-white">Start project</button>
              </Fade>
            </Link>
          </div>
        </div>
        <ul className="col-span-2 flex items-center justify-end space-y-1 lg:space-y-1 hidden md:block">
          <img className="w-full" src={seoImage} alt="" />
          <div className="flex flex-col	items-end">
            {navItems.map((item) => (
              <li key={item.label} className="text-lg font-bold ">
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </div>
        </ul>
      </header>
      <div>
        <OurProcessSeo />
        <ServicesSeo />
      </div>
    </section>
  );
};

export default Seo;
