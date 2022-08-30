import CustomSelect from "../layout/CustomSelect";
import NextButton from "./NextButton";

const EmployeeInfo = () => {
  return (
    <div className="w-8/12 mx-auto bg-white rounded-lg drop-shadow-2xl">
      <form className="w-8/12 mx-auto py-12">
        <div className="flex justify-evenly">
          <div className="mr-10">
            <label htmlFor="firstName">სახელი</label>
            <input
              type="text"
              id="firstName"
              placeholder="გრიშა"
              className="my-1 p-2 text-sm block w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]" />
            <span className="text-sm text-[#2e2e2e]">მინიმუმ 2 სიმბოლო, ქართულის ასოები</span>
          </div>

          <div className="ml-10">
            <label htmlFor="lastName">გვარი</label>
            <input
              type="text"
              id="lastName"
              placeholder="ბაგრატიონი"
              className="my-1 p-2 text-sm block w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff]" />
            <span className="text-sm text-[#2e2e2e]">მინიმუმ 2 სიმბოლო, ქართულის ასოები</span>
          </div>
        </div>

        <CustomSelect text="თიმი" />
        <CustomSelect text="პოზიცია" />

        <div className="my-8">
          <label htmlFor="email">მეილი</label>
          <input
            type="email"
            id="email"
            placeholder="grish666@redberry.ge"
            className="my-1 p-2 text-sm block w-full h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff]" />
          <span className="text-sm text-[#2e2e2e]">უნდა მთავრდებოდეს @redberry.ge-ი</span>
        </div>

        <div>
          <label htmlFor="email">მეილი</label>
          <input
            type="email"
            id="email"
            placeholder="+995 598 00 07 01"
            className="my-1 p-2 text-sm block w-full h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff]" />
          <span className="text-sm text-[#2e2e2e]">უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>
        </div>

        <NextButton path="/" text="შემდეგი" />
      </form >
    </div >

  );
};

export default EmployeeInfo;