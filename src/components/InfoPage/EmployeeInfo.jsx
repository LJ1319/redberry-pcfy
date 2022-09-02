import { useState, useEffect } from "react";
import fetch from "../../axios/custom";

import CustomSelect from "../layout/CustomSelect";
import NextButton from "./NextButton";

import { teams as localTeams } from "../../data";
import { positions as localPositions } from "../../data";

const EmployeeInfo = () => {

  const [teams, setTeams] = useState(localTeams);
  const [positions, setPositions] = useState(localPositions);

  const fetchData = async () => {
    try {
      const teamsData = await fetch("/teams");
      const positionsData = await fetch("/positions");

      setTeams(teamsData.data.data);
      setPositions(positionsData.data.data);

    } catch (error) {

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(teams);
  // console.log(positions);


  const filterPositionsByTeams = (teams, positions) => {
    const positionTeamId = positions.filter((position) => position.team_id === teams.id);

    return positionTeamId;
  };

  // const filtered = filterPositionsByTeams(teams, positions);
  // console.log(filtered);




  return (
    <div className="w-8/12 mx-auto bg-white rounded-lg drop-shadow-2xl">
      <form className="w-8/12 mx-auto py-16">
        <div className="flex justify-evenly">
          <div className="mr-10">
            <label htmlFor="first-name" className="font-semibold">სახელი</label>
            <input
              type="text"
              id="first-name"
              placeholder="გრიშა"
              className="my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]" />
            <span className="text-sm text-[#2e2e2e]">
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </span>
          </div>

          <div className="ml-10">
            <label htmlFor="last-name" className="font-semibold">გვარი</label>
            <input
              type="text"
              id="last-name"
              placeholder="ბაგრატიონი"
              className="my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff]" />
            <span className="text-sm text-[#2e2e2e]">
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </span>
          </div>
        </div>

        <CustomSelect text="თიმი" data={teams} filter={filterPositionsByTeams} />
        <CustomSelect text="პოზიცია" data={positions} filter={filterPositionsByTeams} />

        <div className="my-8">
          <label htmlFor="email" className="font-semibold">მეილი</label>
          <input
            type="email"
            id="email"
            placeholder="grish666@redberry.ge"
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
            type="phone"
            id="phone"
            placeholder="+995 598 00 07 01"
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