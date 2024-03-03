import { useEffect, useState } from 'react';
import SectionTitle from "../../shared/SectionTitle";
import ServiceCard from "../ServiceCard";

const Servicesgraphic = () => {
    const [services, setServices] = useState([]);
    console.log(services)

    useEffect(() => {
        fetch('https://lazy-pink-beaver-sock.cyclic.app/api/v1/admin/get-service')
            .then(res => res.json())
            .then(data => {
                const allServices = data.services;
                const filterData = allServices.filter(service => service.serviceName === 'graphics')
                setServices(filterData);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, []);

    return (
        <div>
            <div className=" text-center">
                <SectionTitle text={"our Support"} number={""} />
            </div>

            <div className="mt-[1em] space-y-8 lg:space-y-20 lg:mt-[3em] text-center md:text-left">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        order={index + 1}
                        service={service} />
                ))}
            </div>
        </div>
    )
}

export default Servicesgraphic
