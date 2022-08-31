import { Link } from "react-router-dom";

const NextButton = ({ destination, text }) => {
  return (
    <div className="flex justify-end">
      <Link to={destination}>
        <button
          className="block w-44 h-16 mt-12 bg-[#62A1EB] rounded-lg text-white text-2xl small-caps font-helvetica-neue"
        >
          {text}
        </button>
      </Link>
    </div>

  );
};

export default NextButton;