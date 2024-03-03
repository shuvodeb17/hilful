/* eslint-disable react/prop-types */

const Service_Process_Card = ({ item, order }) => {
  return (
    <div className="relative flex items-start gap-5 py-8 px-4 border rounded bg-white max-w-sm sm:w-full mx-auto">
      <img src={item.icon} alt="Process Icon" className="w-8 h-8" />
      <div>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <h2 className="absolute text-2xl font-black text-gray-500 top-2 right-3">
          0{order}
        </h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Service_Process_Card;
