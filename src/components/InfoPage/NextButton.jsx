import { Link } from "react-router-dom";

const NextButton = ({ path, text }) => {
  return (
    <Link to={path}>
      <button
        className="block w-44 h-16 my-5 mx-auto bg-[#62A1EB] rounded-lg text-white text-2xl small-caps font-helvetica-neue"
      >
        {text}
      </button>
    </Link>
  );
};

export default NextButton;