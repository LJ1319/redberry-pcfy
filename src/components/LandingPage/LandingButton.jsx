import { Link } from "react-router-dom";

const LandingButton = ({ destination, text }) => {
  return (
    <Link to={destination}>
      <button
        className="block w-96 h-16 my-5 mx-auto bg-[#62A1EB] rounded-lg text-white text-3xl small-caps hover:bg-[#317AD0] active:bg-[#1A5DAB]"
      >
        {text}
      </button>
    </Link>
  );
};

export default LandingButton;