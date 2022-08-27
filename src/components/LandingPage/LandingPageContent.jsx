import Logo from "../../img/logo01.svg";
import Landing from "../../img/landing.svg";

const LandingPageContent = () => {
  return (
    <div className="box-content container max-w-max my-16 mx-auto">
      <img src={Logo} alt="" className="mx-auto" />
      <img src={Landing} alt="" className="my-16 mx-auto" />

      <button className="block w-96 h-16 mb-6 mx-auto border-solid bg-[#62A1EB] rounded-lg text-white">ჩანაწერის დამატება</button>
      <button className="block w-96 h-16 mx-auto border-solid bg-[#62A1EB] rounded-lg text-white">ჩანაწერის სია</button>

    </div >
  );
};

export default LandingPageContent;