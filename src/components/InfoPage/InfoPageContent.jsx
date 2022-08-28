import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";

const InfoPageContent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default InfoPageContent;