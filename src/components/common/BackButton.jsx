import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="border border-gray-300 rounded-md bg-white px-3 py-2 text-sm font-semibold text-mainColor shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      onClick={() => navigate(-1)}
    >
      Cancel
    </button>
  );
};

export default BackButton;
