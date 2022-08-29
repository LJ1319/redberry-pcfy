import { NavLink } from "react-router-dom";

import Back from "../../img/back.svg";

const Navbar = () => {
  let activeClassName = "underline decoration-solid decoration-2 decoration underline-offset-8 text-xl font-bold mx-3";

  return (
    <nav className="flex w-10/12 my-12 mx-auto items-center">
      <div>
        <NavLink to="/"  >
          <button className="w-14 h-14 rounded-full bg-[#D9D9D9]">
            <img src={Back} alt="back arrow" className="my-5 mx-auto" />
          </button>
        </NavLink>
      </div>

      <div className="mx-auto">
        <NavLink
          to="employee-info"
          className={({ isActive }) =>
            isActive ? activeClassName : "text-xl font-bold mx-3"
          }>
          თანამშრომლის ინფო
        </NavLink>

        <NavLink
          to="laptop-info"
          className={({ isActive }) =>
            isActive ? activeClassName : "text-xl font-bold mx-3"
          }>
          ლეპტოპის მახასიათებლები
        </NavLink>
      </div>
    </nav >
  );
};

export default Navbar;

