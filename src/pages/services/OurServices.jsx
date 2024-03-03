import Button from "../shared/Button";
import SectionTitle from "../shared/SectionTitle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";
import { PiGrainsDuotone } from "react-icons/pi";
import { SiCoinmarketcap } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useState } from "react";

const cardData = [
  {
    id: 112,
    title: "Web Development",
    icon: BsCodeSlash,
    desc: ` Javascript is a cornerstone of modern web development, enabling dynamic and interactive user experiences. With the ability to create responsive and feature-rich interfaces, Javascript plays a crucial role in elevating your website's functionality. From client-side scripting to server-side applications, Javascript empowers developers to craft engaging websites that captivate and retain visitors.`,
  },
  {
    id: 11362,
    title: "Graphics design",
    icon: PiGrainsDuotone,
    desc: ` Graphic design is more than just visuals – it's about storytelling, identity, and leaving a lasting impression. At our studio, we specialize in a wide array of graphic design services tailored to meet your branding and marketing needs. From crafting memorable logos to designing captivating social media posts, we're here to help you stand out in a crowded digital landscape.`,
  },
  {
    id: 1162,
    title: "Digital marketing",
    icon: SiCoinmarketcap,
    desc: ` Effective marketing strategies are crucial for businesses to thrive and succeed. At our agency, we specialize in comprehensive digital marketing services designed to elevate your brand, drive traffic, and increase conversions across various online platforms. From search engine optimization (SEO) to social media marketing, we offer a wide range of services tailored to your specific needs and goals.`,
  },
  {
    id: 1162,
    title: "SEO",
    icon: TbSeo,
    desc: ` Enhancing your website's technical aspects, such as site speed, mobile-friendliness, and crawlability, to ensure optimal performance in search engine results.`,
  },
];

const OurServices = () => {
  const [readStates, setReadStates] = useState(Array(cardData.length).fill(false));

  const toggleRead = (index) => {
    const newReadStates = [...readStates];
    newReadStates[index] = !newReadStates[index];
    setReadStates(newReadStates);
  };

  return (
    <div className="py-12 bg-white">
      <div className="px-2 my-container">
        <div>
          <SectionTitle text={"our services"} number={""} />
        </div>

        <div className="space-y-4">
          <p className="text-[36px] sm:text-[45px] md:text-[45px] text-center font-semibold leading-tight">
            We build website solutions that solve client's business challenges
          </p>

          <div className="w-max mx-auto">
            <Link to="/orders">
              <Fade className="flex justify-center md:justify-start mt-5" duration={1800} direction="up">
                <button className="bg-[#444CFC] px-5 py-2 rounded-full text-white">Start project</button>
              </Fade>
            </Link>
          </div>
        </div>

        <div className="my-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardData.map((data, index) => {
            const { title, icon: Icon, desc, id } = data;
            const read = readStates[index];
            return (
              <div
                className="bg-white p-5 rounded-md drop-shadow-sm border border-stone-100 space-y-4 flex flex-col max-w-sm mx-auto sm:w-full"
                key={id}
              >
                <p className="w-10 h-10 bg-btnBg grid place-items-center rounded-full text-white text-2xl">
                  <Icon />
                </p>
                <h2 className="text-2xl font-semibold text-navBg">{title}</h2>
                <p className="text-p-text text-sm sm:text-base">{read ? desc : desc.slice(0, 100)}</p>

                <button onClick={() => toggleRead(index)} className="flex items-center gap-2 text-btnBg mt-auto">
                  {read ? 'Read Less' : 'Read More'} <HiOutlineArrowNarrowRight />{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
