import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const InfoPage = () => {
  return (
    <div className="h-screen bg-[#f6f6f6] font-helvetica-neue">
      <div className="h-auto bg-[#f6f6f6]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default InfoPage;