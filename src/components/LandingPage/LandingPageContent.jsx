import LandingButton from "./LandingButton";

import Logo from "../../img/logo01.svg";
import Landing from "../../img/landing.svg";

const LandingPageContent = () => {
  return (
    <div className="max-w-max my-16 mx-auto">
      <img src={Logo} alt="" className="mx-auto" />
      <img src={Landing} alt="" className="my-16 mx-auto" />

      <LandingButton path="add-info/employee-info" text="ჩანაწერის დამატება" />
      <LandingButton path="/" text="ჩანაწერების სია" />
    </div >
  );
};

export default LandingPageContent;