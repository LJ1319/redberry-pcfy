import { Link } from "react-router-dom";

import Success from "../assets/img/success.svg";

const SuccessPage = () => {
  return (
    <div className="h-screen bg-[#4A4A4A] font-helvetica-neue">
      <div className="h-auto bg-[#4A4A4A] py-44">

        <div className="pt-2 pb-8 w-5/12 bg-white mx-auto flex flex-col items-center rounded-lg">
          <div className="w-max">
            <img src={Success} alt="" />
            <span className="text-xl font-bold">ჩანაწერი დამატებულია!</span>
          </div>

          <div className="flex flex-col items-center mt-6">
            <button className="w-60 h-16 mt-12 bg-[#62A1EB] rounded-lg text-white text-xl hover:bg-[#317AD0] active:bg-[#1A5DAB]">
              <Link to="/">სიაში გადაყვანა</Link>
            </button>

            <Link to="/">
              <button className="mt-4 rounded-lg text-[#62A1EB] text-xl">მთავარი</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;