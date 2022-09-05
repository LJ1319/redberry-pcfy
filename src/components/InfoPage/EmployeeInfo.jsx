import { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";

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
  const [positionId, setPositionId] = useLocalStorage("position_id", "");
  const [positionTeamId, setPositionTeamId] = useLocalStorage("position_teamId", "");

  const employeeNameInputRef = useRef();
  const employeeSurnameInputRef = useRef();
  const employeeEmailInputRef = useRef();
  const employeePhoneInputRef = useRef();

  const [isValidName, setIsValidName] = useLocalStorage("isValidName", "not_filled");
  const [isValidSurname, setIsValidSurname] = useLocalStorage("isValidSurname", "not_filled");
  const [isValidTeam, setIsValidTeam] = useLocalStorage("isValidTeam", "not_filled");
  const [isValidPosition, setIsValidPosition] = useLocalStorage("isValidPosition", "not_filled");
  const [isValidEmail, setIsValidEmail] = useLocalStorage("isValidEmail", "not_filled");
  const [isValidPhone, setIsValidPhone] = useLocalStorage("isValidPhone", "not_filled");

  const [isValid, setIsValid] = useState(false);

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
  }, [teamId, teams, setFilteredPositions]);

  const validate = () => {
    let geoRegExp = /^[ა-ჰ]{2,}$/;
    let digRegExp = /^\+(\d{3})(\d{9})$/;

    let validName = geoRegExp.test(employeeNameInputRef.current.value);
    let validSurname = geoRegExp.test(employeeSurnameInputRef.current.value);
    let validTeam = JSON.parse(localStorage.getItem("team")) !== "";
    let validPosition = JSON.parse(localStorage.getItem("position")) !== "";
    let validEmail = employeeEmailInputRef.current.value.split('@')[1] === 'redberry.ge';
    let validPhone = digRegExp.test(employeePhoneInputRef.current.value);

    validName ? setIsValidName(true) : setIsValidName(false);
    validSurname ? setIsValidSurname(true) : setIsValidSurname(false);
    validTeam ? setIsValidTeam(true) : setIsValidEmail(false);
    validPosition ? setIsValidPosition(true) : setIsValidPosition(false);
    validEmail ? setIsValidEmail(true) : setIsValidEmail(false);
    validPhone ? setIsValidPhone(true) : setIsValidPhone(false);

    if (validName && validSurname && validTeam && validPosition && validEmail && validPhone) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    isLoading && !filterPositionsByTeams ? "loading" :
      <div className="w-8/12 mx-auto bg-white rounded-lg drop-shadow-2xl">
        <form onSubmit={submitHandler} className="w-8/12 mx-auto py-16">
          <div className="flex justify-evenly">
            <div className="mr-10">
              <label
                htmlFor="first-name"
                className={`
                  ${!isValidName ? "text-redberryRed" : ""} font-semibold 
                `}>
                სახელი
              </label>
              <input
                required
                type="text"
                id="first-name"
                placeholder="გრიშა"
                value={name}
                ref={employeeNameInputRef}
                onChange={(e) => setName(e.target.value)}
                className={`
                  ${!isValidName ? "border-redberryRed focus:border-redberryRed focus:bg-white" : ""} 
                  my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]
                `} />
              <span
                className={`
                  ${!isValidName ? "text-redberryRed" : ""} 
                  text-sm text-[#2e2e2e]
                `}>
                მინიმუმ 2 სიმბოლო, ქართული ასოები
              </span>
            </div>

            <div className="ml-10">
              <label
                htmlFor="surname"
                className={`
                  ${!isValidSurname ? "text-redberryRed" : ""} font-semibold 
                `}>
                გვარი
              </label>
              <input
                required
                type="text"
                id="surname"
                placeholder="ბაგრატიონი"
                value={surname}
                ref={employeeSurnameInputRef}
                onChange={(e) => setSurname(e.target.value)}
                className={`
                  ${!isValidSurname ? "border-redberryRed focus:border-redberryRed focus:bg-white" : ""}  
                  my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff]
                `} />
              <span
                className={`
                  ${!isValidSurname ? "text-redberryRed" : ""} 
                  text-sm text-[#2e2e2e]
                `}>
                მინიმუმ 2 სიმბოლო, ქართული ასოები
              </span>
            </div>
          </div>

          <CustomSelect
            text="თიმი"
            name="team"
            data={teams}
            changeTeamId={(teamId) => setTeamId(teamId)}
          />

          <CustomSelect
            text="პოზიცია"
            name="position"
            data={filteredPositions}
            teamId={teamId}
            positionTeamId={positionTeamId}
            changePositionId={(positionId) => setPositionId(positionId)}
            changePositionTeamId={(positionTeamId) => setPositionTeamId(positionTeamId)}
          />

          <div className="my-8">
            <label
              htmlFor="email"
              className={`
                  ${!isValidEmail ? "text-redberryRed" : ""} font-semibold 
              `}>
              მეილი
            </label>
            <input
              required
              type="email"
              id="email"
              placeholder="grish666@redberry.ge"
              value={email}
              ref={employeeEmailInputRef}
              onChange={(e) => setEmail(e.target.value)}
              className={`
                ${!isValidEmail ? "border-redberryRed focus:border-redberryRed focus:bg-white" : ""} 
                my-1 p-2 text-sm w-full h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff]
              `} />
            <span
              className={`
                  ${!isValidEmail && isValid ? "text-redberryRed" : ""} 
                  text-sm text-[#2e2e2e]
              `}>
              უნდა მთავრდებოდეს @redberry.ge-ით
            </span>
          </div>

          <div className="my-8">
            <label
              htmlFor="phone"
              className={`
                  ${!isValidPhone ? "text-redberryRed" : ""} font-semibold 
              `}>
              ტელეფონის ნომერი
            </label>
            <input
              required
              type="text"
              id="phone"
              placeholder="+995 598 00 07 01"
              value={phone}
              ref={employeePhoneInputRef}
              onChange={(e) => setPhone(e.target.value)}
              className={`
                ${!isValidPhone ? "border-redberryRed focus:border-redberryRed focus:bg-white" : ""} 
                my-1 p-2 text-sm w-full h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff]
              `} />
            <span
              className={`
                  ${!isValidPhone ? "text-redberryRed" : ""} 
                  text-sm text-[#2e2e2e]
              `}>
              უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
            </span>
          </div>

          {isValid && (<Navigate to="/add-info/laptop-info" />)}
          <NextButton
            text="შემდეგი"
            validate={validate} />
        </form >
      </div >
  );
};

export default EmployeeInfo;