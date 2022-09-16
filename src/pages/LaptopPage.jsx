import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetch from "../axios/custom";

const LaptopPage = () => {

  let { laptopId } = useParams();

  const token = "37f4d5d4377097575b0104f8709ad37d";
  const URI = "https://pcfy.redberryinternship.ge/";

  const [userData, setUserData] = useState([]);
  const [laptopData, setLaptopData] = useState([]);

  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");

  const [brand, setBrand] = useState("");
  // const [cpus, setCPUs] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const respData = await fetch(`/laptop/${laptopId}?token=${token}`);

      const teamsData = await fetch("/teams");
      const positionsData = await fetch("/positions");

      const brandsData = await fetch("/brands");
      // const cpusData = await fetch("/cpus");

      setUserData(respData.data.data.user);
      setLaptopData(respData.data.data.laptop);

      const team = teamsData.data.data.filter((team) => respData.data.data.user.team_id === team.id
      );

      const position = positionsData.data.data.filter((position) => respData.data.data.user.position_id === position.id
      );

      const brand = brandsData.data.data.filter((brand) => respData.data.data.laptop.brand_id === brand.id
      );


      setTeam(team[0].name);
      setPosition(position[0].name);
      setBrand(brand[0].name);

      // setCPUs(cpusData.data.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData);
  // console.log(laptopData);
  // console.log(team);
  // console.log(positions);
  // console.log(brands);
  // console.log(cpus)


  return (
    <div className="mx-auto w-8/12">
      <div className="mx-auto flex justify-evenly border-b-2 pb-16">
        {laptopData.image &&
          <img
            src={`${URI}${laptopData.image}`}
            alt={laptopData.name}
            className="h-96 bg-auto"
          />
        }
        <div className="my-auto w-96">
          <h3 className="font-semibold text-xl flex justify-between my-4">
            სახელი:
            <span className="font-normal text-[#797979]">
              {userData.name} {userData.surname}
            </span>
          </h3>
          <h3 className="font-semibold text-xl flex justify-between my-4">
            თიმი:
            <span className="font-normal text-[#797979]">
              {team}
            </span>
          </h3>
          <h3 className="font-semibold text-xl flex justify-between my-4">
            პოზიცია:
            <span className="font-normal text-[#797979]">
              {position}
            </span>
          </h3>
          <h3 className="font-semibold text-xl flex justify-between my-4">
            მეილი:
            <span className="font-normal text-[#797979]">
              {userData.email}
            </span>
          </h3>
          <h3 className="font-semibold text-xl flex justify-between my-4">
            ტელ. ნომერი:
            <span className="font-normal text-[#797979]">
              {userData.phone_number}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LaptopPage;