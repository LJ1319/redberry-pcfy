import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex">
      <NavLink to="employee-info">თანამშრომლის ინფო</NavLink> | {" "}
      <NavLink to="laptop-info">ლეპტოპის ინფო</NavLink>
    </nav>
  );
};

export default Navbar;

