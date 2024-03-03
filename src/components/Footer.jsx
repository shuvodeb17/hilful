import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="bg-navBg pt-8">
      <div className="my-container flex flex-wrap gap-5 justify-between">
        <div className="text-zinc-100 space-y-4">
          <h2 className="text-2xl font-semibold">Head Office</h2>

          <div className="text-zinc-200 space-y-2">
            <p className="flex items-center gap-2">
              <BiMap /> Tongibari, Munshiganj, Dhaka, Bangladesh
            </p>
            <p className="mb-4">
              <Link to="https://wa.me/+8801976243616" className="cursor-pointer flex items-center gap-3" target="_blank">
                <AiOutlineWhatsApp size={18} />
                <Link to="https://wa.me/01976243616" target="_blank">+8801976243616</Link>
              </Link>
            </p>

            <h2 className="text-2xl font-semibold mt-4">Branch Office</h2>
            <p className="mb-4">
              <Link to="https://wa.me/++447404080859" className="cursor-pointer flex items-center gap-3" target="_blank">
                <AiOutlineWhatsApp size={18} />
                <Link to="https://wa.me/++447404080859" target="_blank">+447404080859</Link>
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <BiMap /> Mansfield, Nottinghamshire,UK
            </p>


            {/* <p className="flex items-center gap-2">
              <BsTelephone /> +8801976243616
            </p>
            
            <p className="flex items-center gap-2">
              <BsTelephone /> ++447404080859
            </p>
            <p className=" ">
              <Link to="mailto:khidmahit2023@gmail.com" className="cursor-pointer flex items-center gap-3" target="_blank">
                <MdOutlineMailOutline size={18} />
                <Link to="mailto:khidmahit2023@gmail.com" target="_blank">khidmahit2023@gmail.com</Link>
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <BiMap /> Mansfield, Nottinghamshire,UK/London
            </p>
            <p className="flex items-center gap-2">
              <BiMap /> Tongibari, Munshiganj, Dhaka, Bangladesh
            </p> */}
          </div>
        </div>

        <div className="text-zinc-100 flex flex-col space-y-2  capitalize ">
          <Link target='_blank' to={"https://www.facebook.com/hilfulfuzulit2023"}>
            <FaFacebook className="cursor-pointer hover:text-[#444CFC]" size={24} />
          </Link>
          <Link target='_blank' to={"https://www.linkedin.com/company/hilfulfuzulit2023"}>
            <FaLinkedin className="cursor-pointer hover:text-[#444CFC]" size={24} />
          </Link>
          <Link target='_blank' to={"https://www.instagram.com/hilfulfuzulit2023/"}>
            <FaInstagram className="cursor-pointer hover:text-[#444CFC]" size={24} />
          </Link>
          <p className=" ">
            <Link to="mailto:khidmahit2023@gmail.com" className="cursor-pointer flex items-center gap-3" target="_blank">
              <Link to="mailto:khidmahit2023@gmail.com" target="_blank">
                <MdOutlineMailOutline className="cursor-pointer hover:text-[#444CFC]" size={24} />
              </Link>
            </Link>
          </p>
        </div>

        <div className="text-zinc-100 flex flex-col space-y-2  capitalize font-medium">
          <Link to={"/"}>home</Link>
          <Link to={"/web-development"}>service</Link>
          <Link to={"/about-us"}>company</Link>
        </div>

        {/*  <div className="text-zinc-100 flex flex-col space-y-2  capitalize ">
          <Link to={"/"}>technical support</Link>
          <Link to={"/"}>development</Link>
          <Link to={"/"}>technology information</Link>
          <Link to={"/"}>testing</Link>
          <Link to={"/"}>consulting</Link>
        </div> */}
      </div>

      <p className="text-zinc-200 text-center font-semibold  py-3">
        &copy; {new Date().getFullYear()} copy rights. All right reserved by
        <span className="font-bold text-yellow-400"> Hilful Fuzul IT</span>
      </p>
    </div>
  );
};

export default Footer;
