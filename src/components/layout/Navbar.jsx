import NavLinkComponent from "./NavLinkComponent";

import NavBackButton from "./NavBackButton";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let destination;

  switch (location.pathname) {
    case "/add-info/employee-info":
      destination = "/";
      break;
    case "/add-info/laptop-info":
      destination = "/";
      break;
    default:
      break;
  }

  return (
    <nav className="flex w-10/12 py-12 mx-auto items-center">
      <div>
        <NavBackButton destination={destination} />
      </div>

      <div className="mx-auto">
        <NavLinkComponent destination="employee-info" text="თანამშრომლის ინფო" />
        <NavLinkComponent destination="laptop-info" text="ლეპტოპის მახასიათებლები" />
      </div>
    </nav >
  );
};

export default Navbar;

