import { Link } from "react-router-dom";

const BackButton = ({ destination, text }) => {
  return (
    <div className="flex justify-end">
      <Link to={destination}>
        <button
          className="mt-12 rounded-lg text-[#62A1EB] text-xl"
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default BackButton;