import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ destination, text }) => {
  let activeClassName = "underline decoration-solid decoration- decoration underline-offset-[15px] text-xl font-bold mx-3";

  return (
    <NavLink
      to={destination}
      className={({ isActive }) =>
        isActive ? activeClassName : "text-xl font-bold mx-3"
      }>
      {text}
    </NavLink>
  );
};

export default NavLinkComponent;