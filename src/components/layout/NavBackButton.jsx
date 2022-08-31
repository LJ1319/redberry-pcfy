import { Link } from "react-router-dom";
import Back from "../../img/back.svg";

const NavBackButton = ({ destination }) => {
  return (
    <Link to={destination}  >
      <button className="w-14 h-14 rounded-full bg-[#D9D9D9]">
        <img src={Back} alt="back arrow" className="my-5 mx-auto" />
      </button>
    </Link>
  );
};

export default NavBackButton;