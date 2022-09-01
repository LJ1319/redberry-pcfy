import { Link } from "react-router-dom";

const SaveButton = ({ destination, text }) => {
  return (
    <div className="flex justify-end">
      <Link to={destination}>
        <button
          className="block w-56 h-16 mt-12 bg-[#62A1EB] rounded-lg text-white text-xl"
        >
          {text}
        </button>
      </Link>
    </div>

  );
};

export default SaveButton;