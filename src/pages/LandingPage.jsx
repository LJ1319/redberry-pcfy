import LandingButton from "../components/LandingPage/LandingButton";

import Logo from "../assets/img/logo01.svg";
import Landing from "../assets/img/landing.svg";

const LandingPage = () => {
  return (
    <div className="w-max my-16 mx-auto font-helvetica-neue">
      <img src={Logo} alt="" className="mx-auto" />
      <img src={Landing} alt="" className="my-16 mx-auto" />

      <div>
        <LandingButton destination="add-info/employee-info" text="ჩანაწერის დამატება" />
        <LandingButton destination="/" text="ჩანაწერების სია" />
      </div>
    </div >
  );
};

export default LandingPage;