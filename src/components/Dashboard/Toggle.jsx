import { useState } from "react";

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`w-12 h-6 p-1 rounded-full transition-colors duration-300 cursor-pointer ${
        isActive ? "bg-blue-600" : "bg-gray-300"
      }`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <span
        className={`block w-4 h-4 rounded-full transition-all duration-300 ${
          isActive ? "translate-x-6 bg-white" : "bg-gray-500"
        }`}
      />
    </div>
  );
};

export default Toggle;
