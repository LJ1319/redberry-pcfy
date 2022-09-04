import { useState, useEffect, useRef } from "react";

import fetch from "../../axios/custom";
import { useLocalStorage } from "../../useLocalStorage";

import CustomSelect from "../layout/CustomSelect";
import NextButton from "./NextButton";

const EmployeeInfo = () => {

  const [name, setName] = useLocalStorage("employee_name", "");
  const [surname, setSurname] = useLocalStorage("employee_surname", "");
  const [email, setEmail] = useLocalStorage("employee_email", "");
  const [phone, setPhone] = useLocalStorage("employee_phone", "");

  const [teams, setTeams] = useState([]);
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [filteredPositions, setFilteredPositions] = useLocalStorage("filtered_positions", []);
  const [teamId, setTeamId] = useLocalStorage("team_id", "");

  const employeeNameInputRef = useRef();
  const employeeSurnameInputRef = useRef();
  const employeeEmailInputRef = useRef();
  const employeePhoneInputRef = useRef();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const teamsData = await fetch("/teams");
      const positionsData = await fetch("/positions");

      setTeams(teamsData.data.data);
      setPositions(positionsData.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterPositionsByTeams = positions.filter((position) => position.team_id === teamId);

  useEffect(() => {
    setFilteredPositions(filterPositionsByTeams);
  }, [teamId, teams]);

  return (
    isLoading && !filterPositionsByTeams ? "loading" :
      <div className="w-8/12 mx-auto bg-white rounded-lg drop-shadow-2xl">
        <form className="w-8/12 mx-auto py-16">
          <div className="flex justify-evenly">
            <div className="mr-10">
              <label htmlFor="first-name" className="font-semibold">სახელი</label>
              <input
                type="text"
                id="first-name"
                placeholder="გრიშა"
                value={name}
                ref={employeeNameInputRef}
                onChange={(e) => setName(e.target.value)}
                className="my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]" />
              <span className="text-sm text-[#2e2e2e]">
                მინიმუმ 2 სიმბოლო, ქართული ასოები
              </span>
            </div>

            <div className="ml-10">
              <label htmlFor="surname" className="font-semibold">გვარი</label>
              <input
                type="text"
                id="surname"
                placeholder="ბაგრატიონი"
                value={surname}
                ref={employeeSurnameInputRef}
                onChange={(e) => setSurname(e.target.value)}
                className="my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff]" />
              <span className="text-sm text-[#2e2e2e]">
                მინიმუმ 2 სიმბოლო, ქართული ასოები
              </span>
            </div>
          </div>

          <CustomSelect
            text="თიმი"
            name="team"
            data={teams}
            changeTeamId={(teamId) => setTeamId(teamId)} />

          <CustomSelect
            text="პოზიცია"
            name="position"
            data={filteredPositions}
          />

          <div className="my-8">
            <label htmlFor="email" className="font-semibold">მეილი</label>
            <input
              type="email"
              id="email"
              placeholder="grish666@redberry.ge"
              value={email}
              ref={employeeEmailInputRef}
              onChange={(e) => setEmail(e.target.value)}
              className="my-1 p-2 text-sm w-full h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff]" />
            <span className="text-sm text-[#2e2e2e]">
              უნდა მთავრდებოდეს @redberry.ge-ით
            </span>
          </div>

          <div className="my-8">
            <label htmlFor="phone" className="font-semibold">
              ტელეფონის ნომერი
            </label>
            <input
              type="text"
              id="phone"
              placeholder="+995 598 00 07 01"
              value={phone}
              ref={employeePhoneInputRef}
              onChange={(e) => setPhone(e.target.value)}
              className="my-1 p-2 text-sm w-full h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff]" />
            <span className="text-sm text-[#2e2e2e]">
              უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
            </span>
          </div>

          <NextButton destination="/add-info/laptop-info" text="შემდეგი" />
        </form >
      </div >
  );
};

export default EmployeeInfo;