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
  const [cpu, setCpu] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const respData = await fetch(`/laptop/${laptopId}?token=${token}`);

      const teamsData = await fetch("/teams");
      const positionsData = await fetch("/positions");

      const brandsData = await fetch("/brands");

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
      setCpu(respData.data.data.laptop.cpu);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

      <div className="mx-auto flex justify-around border-b-2 pb-16">
        <div className="mt-12 w-96">
          <h3 className="font-semibold text-xl flex justify-between my-4">
            ლეპტოპს სახელი:
            <span className="font-normal text-[#797979]">
              {laptopData.name}
            </span>
          </h3>
          <h3 className="font-semibold text-xl flex justify-between my-4">
            ლეპტოპის ბრენდი:
            <span className="font-normal text-[#797979]">
              {brand}
            </span>
          </h3>
          <h3 className="font-semibold text-xl flex justify-between my-4">
            RAM:
            <span className="font-normal text-[#797979]">
              {laptopData.ram}
            </span>
          </h3>
          <h3 className="font-semibold text-xl flex justify-between my-4">
            მეხსიერების ტიპი:
            <span className="font-normal text-[#797979]">
              {laptopData.hard_drive_type}
            </span>
          </h3>
        </div>

        <div className="my-auto w-96">
          <h3 className="font-semibold text-xl flex justify-between my-4">
            CPU:
            <span className="font-normal text-[#797979]">
              {cpu.name}
            </span>
          </h3>
          <h3 className="font-semibold text-xl flex justify-between my-4">
            CPU-ს ბირთვი:
            <span className="font-normal text-[#797979]">
              {cpu.cores}
            </span>
          </h3>
          <h3 className="font-semibold text-xl flex justify-between my-4">
            CPU-ს ნაკადი:
            <span className="font-normal text-[#797979]">
              {cpu.threads}
            </span>
          </h3>
        </div>
      </div>

      <div className="mx-auto flex justify-around pb-16">
        <div className="mt-12 w-96">
          <h3 className="font-semibold text-xl flex justify-between my-4">
            ლეპტოპის მდგომარეობა:
            {!isLoading &&
              <span className="font-normal text-[#797979]">
                {laptopData.state === "new" ? "ახალი" : "მეორადი"}
              </span>
            }
          </h3>

          <h3 className="font-semibold text-xl flex justify-between my-4">
            ლეპტოპის ფასი:
            <span className="font-normal text-[#797979]">
              {laptopData.price}
            </span>
          </h3>
        </div>

        <div className="my-auto w-96">
          <h3 className="font-semibold text-xl flex justify-between my-4">
            შეძენის რიცხვი:
            <span className="font-normal text-[#797979]">
              {laptopData.purchase_date}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LaptopPage;