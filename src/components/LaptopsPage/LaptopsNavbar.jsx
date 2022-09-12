import NavBackButton from "../layout/NavBackButton";
import { useLocation } from "react-router-dom";

const LaptopsNavbar = () => {
  let location = useLocation();
  let destination;
  let text;

  switch (location.pathname) {
    case "/laptops":
      destination = "/";
      text = "ჩანაწერების სია";
      break;
    case "/laptops/":
      destination = "/";
      text = "ლეპტოპის ინფო";
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
        <h1 className="text-4xl font-bold small-caps">
          {text}
        </h1>
      </div>

    </nav>
  );
};

export default LaptopsNavbar;

