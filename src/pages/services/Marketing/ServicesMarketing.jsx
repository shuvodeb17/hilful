import { useEffect, useState } from 'react';
import SectionTitle from "../../shared/SectionTitle";
import ServiceCard from "../ServiceCard";


const ServicesMarketing = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://lazy-pink-beaver-sock.cyclic.app/api/v1/admin/get-service')
            .then(res => res.json())
            .then(data => {
                const allServices = data.services;
                const filterData = allServices.filter(service => service.serviceName === 'marketing')
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

export default ServicesMarketing


// Reach
// Target Market
// Outrank Competitors
// Measurable Results
// Gain Buyers
// Conversion
