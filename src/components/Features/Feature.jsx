import { FaShippingFast } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="py-16 bg-white p-4 shadow-sm rounded-md flex flex-col gap-4 justify-center items-center transition-shadow duration-300 hover:shadow-lg">
      <div className="w-16 h-16 rounded-full bg-gray-100 grid place-items-center text-mainColor">
        <FaShippingFast size={30} />
      </div>
      <p className="text-xl text-mainColor font-semibold">Worldwide Delivery</p>
      <p className="text-base text-gray-500">
        We offer competitive prices on our 100 million plus product any range.
      </p>
    </div>
  );
};

export default Feature;
