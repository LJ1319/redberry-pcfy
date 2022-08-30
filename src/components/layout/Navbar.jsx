import { Link } from "react-router-dom";
import NavLinkComponent from "./NavLinkComponent";

import Back from "../../img/back.svg";

const Navbar = () => {
  return (
    <nav className="flex w-10/12 py-12 mx-auto items-center">
      <div>
        <Link to="/"  >
          <button className="w-14 h-14 rounded-full bg-[#D9D9D9]">
            <img src={Back} alt="back arrow" className="my-5 mx-auto" />
          </button>
        </Link>
      </div>

      <div className="mx-auto">
        <NavLinkComponent path="employee-info" text="თანამშრომლის ინფო" />
        <NavLinkComponent path="laptop-info" text="ლეპტოპის მახასიათებლები" />
      </div>
    </nav >
  );
};

export default Navbar;

