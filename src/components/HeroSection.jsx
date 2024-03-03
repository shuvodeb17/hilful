import heroImg from "../assets/Image.png";
import Button from "../pages/shared/Button";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom"


const HeroSection = () => {
  return (
    <div className="bg-[#232436] text-white pb-4 md:py-6 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row gap-8 justify-between items-center my-container ">
        <div className="md:w-[50%]">
          {/* left side  */}

          <div className="space-y-5  w-full order-1">
            <Fade direction="up" duration={1000} triggerOnce delay={100}>
              <button className=" hidden cursor-none px-2 py-1 rounded-[4px] md:block text-left text-[16px] leading-tight bg-[#3b4963]">
                Hilful Fuzul IT
              </button>
              <h1 className="text-[25px] text-center md:text-left sm:text-[45px] md:text-[46px] leading-tight">
                𝑀𝑎𝑥𝑖𝑚𝑖𝑧𝑒𝑠 𝐵𝑢𝑠𝑖𝑛𝑒𝑠𝑠𝑒𝑠’ 𝑉𝑖𝑠𝑖𝑏𝑖𝑙𝑖𝑡𝑦, 𝐺𝑒𝑛𝑒𝑟𝑎𝑡𝑒𝑠 𝑀𝑜𝑟𝑒 𝐿𝑒𝑎𝑑𝑠, 𝑎𝑛𝑑 𝐼𝑛𝑐𝑟𝑒𝑎𝑠𝑒𝑠 𝑆𝑎𝑙𝑒𝑠
              </h1>
            </Fade>
            <Fade direction="up" duration={1300}>
              <p className="text-zinc-200 text-[13px]  text-center md:text-left font-normal sm:max-w-xs w-full">
                We are innovative problem solvers who have a talent for creating online brand identity. We empower brands to thrive, helping them achieve things they never thought possible.
              </p>
            </Fade>

            <Link to='/orders'>
              <Fade className="flex justify-center md:justify-start mt-5" duration={1800} direction="up">
                <button className="bg-[#444CFC] px-5 py-2 rounded-full">Start project</button>
              </Fade>
            </Link>
          </div>

        </div>

        {/* right side */}

        <div className="-order-2 md:w-[50%] sm:order-2">
          <img
            src={heroImg}
            alt="hero image"
            loading="lazy"
            className="max-w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
