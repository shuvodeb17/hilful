/* eslint-disable react/prop-types */


const ServiceCard = ({ service, order }) => {
    return (
        <div className={`items-center justify-between lg:flex lg:space-y-0 space-y-6 ${order % 2 === 0 && "flex-row-reverse"} gap-5`}>
            <div className="space-y-1 lg:space-y-4 lg:w-4/6">
                <h3 className="text-xl font-bold lg:text-xl">{service.postName}</h3>
                <h3 className="text-3xl font-bold">{service.postShortName}</h3>
                <p>{service.description}</p>
            </div>
            <div>
                <img src={service.image} alt="Service Image" className=" w-[418px] h-[250px] object-center" />
            </div>
        </div>
    )
}

export default ServiceCard