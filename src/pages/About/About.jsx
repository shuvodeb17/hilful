// import ceo from '../../assets/update/Digital-Marketing/Digital Marketing.jpg'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Department from "./Department";
import ceo from '../../assets/founder.jpeg'
import manager from '../../assets/update/manager.jpeg'
import { BiMap } from "react-icons/bi";


const About = () => {
    return (
        <div className="bg-[#fff] py-5">
            <div className="mx-auto">
                <img className='lg:w-48 lg:h-48 w-32 h-32 rounded-full object-cover mx-auto' src={ceo} alt="" />

                <div className="mx-auto text-center mt-5">
                    <h1 className="text-3xl font-semibold">MD: Noman</h1>
                    <p className="text-[#232536]">Founder & CEO</p>
                    <p className="text-[#232536] lg:w-6/12 mx-auto px-2 py-4">“Business has only two functions- marketing and innovation.”
                        - Milan Kundera</p>

                    <div className="flex items-center justify-center gap-5">
                        <Link className='hover:text-[#444CFC] transition-all duration-200' to="https://wa.me/01976243616" target="_blank">
                            <FaWhatsapp className='hover:text-[#444CFC] transition-all duration-200 cursor-pointer' size={20} />
                        </Link>

                        <Link className='hover:text-[#444CFC] transition-all duration-200' target='_blank' to={"https://www.facebook.com/hilfulfuzulit2023"}>
                            <FaFacebook className="hover:text-[#444CFC] transition-all duration-200" size={20} />
                        </Link>

                        <Link className='hover:text-[#444CFC] transition-all duration-200' target='_blank' to={"https://www.linkedin.com/company/hilfulfuzulit2023"}>
                            <FaLinkedin className="hover:text-[#444CFC] transition-all duration-200" size={20} />
                        </Link>

                        <Link className='hover:text-[#444CFC] transition-all duration-200' target='_blank' to={"https://www.instagram.com/hilfulfuzulit2023/"}>
                            <FaInstagram className="hover:text-[#444CFC] transition-all duration-200" size={20} />
                        </Link>
                    </div>

                    <div className="mt-20 lg:w-6/12 px-2 text-center mx-auto">
                        <h1 className="text-3xl font-semibold">Company Information</h1>
                        <p className="text-[#232536] py-4">At <span style={{textDecoration: 'underline', textDecorationColor: '#444CFC', color:'#444CFC', fontWeight:'bold'}} className="underline"><Link to="https://hilfulfuzulit.com/">Hilful Fuzul IT</Link></span> , we're more than just a digital agency – we're your dedicated partner in achieving online success. Founded on the principles of innovation, creativity, and customer-centricity, our mission is to empower businesses and individuals with cutting-edge digital solutions tailored to their unique needs and aspirations.</p>
                    </div>

                    <div className="mt-10">
                        <img className='lg:w-48 lg:h-48 w-32 h-32 rounded-full object-cover mx-auto' src={manager} alt="" />
                        <h1 className="text-3xl font-semibold">Sajjadul islam</h1>
                        <p className="text-[#232536]">Branch Manager of UK</p>
                        <p className="flex items-center justify-center mt-2 gap-2">
                            <BiMap /> Mansfield, Nottinghamshire,UK
                        </p>
                    </div>
                </div>


                <div className="mt-20 lg:container lg:px-0 px-2 mx-auto">
                    <Department />
                </div>
            </div>
        </div>
    );
};

export default About;