import { useEffect, useState } from 'react';
import SectionTitle from "../../shared/SectionTitle";
import ServiceCard from "../ServiceCard";


const ServicesSeo = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://lazy-pink-beaver-sock.cyclic.app/api/v1/admin/get-service')
            .then(res => res.json())
            .then(data => {
                const allServices = data.services;
                const filterData = allServices.filter(service => service.serviceName === 'seo')
                setServices(filterData);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, []);


    return (
       <form >
         <div>
            <div className=" text-center">
                <SectionTitle text={"our Support"} number={""} />
            </div>
            {/* <div className=' mx-auto pt-3'>
                <p className='md:text-[.94em] text-[.85em] font-semibold'>Profile </p>
                <p className='pt-1 md:pt-2'><input name='image' id="image" type='file' accept='image/*' className=" rounded-md bg-red-500 bg-opacity-5 border border-[#c32629] w-full py-2 md:py-[12px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
            </div> */}
            {/* <p onClick={handleClick} className='pt-1 md:pt-2'><input type="submit" value="Sign In" className={`${isScaled ? 'scale-90' : ''}  bg-gradient-to-r from-[#c32629] to-[#e5b235]  duration-300  rounded-md cursor-grab w-full py-2 md:py-[9px] pl-1 md:pl-2 text-[.65em] font-bold text-yellow-50 md:text-[1.3em] `} /></p> */}

            <div className="mt-[1em] space-y-8 lg:space-y-20 lg:mt-[3em] text-center md:text-left">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        order={index + 1}
                        service={service} />
                ))}
            </div>
        </div>
       </form>
    )
}

export default ServicesSeo
