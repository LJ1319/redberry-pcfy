import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-[#4A4A4A] font-helvetica-neue">
      <div className="h-auto bg-[#4A4A4A] py-44">

        <div className="pt-2 pb-8 w-5/12 bg-white mx-auto flex flex-col items-center rounded-lg">
          <div className="w-max pt-12">
            <span className="text-xl font-bold">ასეთი გვერდი ვერ მოიძებნა!</span>
          </div>

          <div className="flex flex-col items-center mt-6">
            <button className="w-60 h-16 mt-12 bg-[#62A1EB] rounded-lg text-white text-xl hover:bg-[#317AD0] active:bg-[#1A5DAB]">
              <Link to="/laptops">სიაში გადაყვანა</Link>
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

export default ErrorPage;