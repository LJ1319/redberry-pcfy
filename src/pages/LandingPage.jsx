import LandingButton from "../components/LandingPage/LandingButton";

import Logo from "../img/logo01.svg";
import Landing from "../img/landing.svg";

const LandingPage = () => {
  return (
    <div className="max-w-max my-16 mx-auto">
      <img src={Logo} alt="" className="mx-auto" />
      <img src={Landing} alt="" className="my-16 mx-auto" />

      <div>
        <LandingButton path="add-info/employee-info" text="ჩანაწერის დამატება" />
        <LandingButton path="/" text="ჩანაწერების სია" />
      </div>
    </div >
  );
};

export default LandingPage;