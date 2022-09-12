import { Outlet } from "react-router-dom";

import LaptopsNavbar from "../components/LaptopsPage/LaptopsNavbar";

const LaptopsPage = () => {
  return (
    <div className="font-helvetica-neue">
      <LaptopsNavbar />
      <Outlet />
    </div>
  );
};

export default LaptopsPage;;