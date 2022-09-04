import { Link } from "react-router-dom";

const NextButton = ({ destination, text }) => {
  return (
    <div className="flex justify-end">
      <Link to={destination}>
        <button
          className="w-44 h-16 mt-12 bg-[#62A1EB] rounded-lg text-white text-xl hover:bg-[#317AD0] active:bg-[#1A5DAB]"
        >
          {text}
        </button>
      </Link>
    </div>

  );
};

export default NextButton;