import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import fetch from "../../axios/custom";

const LaptopsList = () => {
  const token = "37f4d5d4377097575b0104f8709ad37d";
  const URI = "https://pcfy.redberryinternship.ge/";

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const respData = await fetch(`/laptops?token=${token}`);

      setUserData(respData.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData);

  return (
    <div className="grid justify-between grid-cols-1 gap-4 my-12 lg:grid-cols-2 w-8/12 mx-auto">
      {userData.map((data) => {
        return (
          <div
            className="mx-auto h-52 w-11/12 grid grid-cols-3 col-span-1 p-2 px-2 text-left border border-[#AED1EA] rounded-xl mb-6 bg-[#EAFAFF]"
            key={data.laptop.id}
          >
            <img
              className="rounded-lg h-44 my-auto mx-auto"
              src={`${URI}${data.laptop.image} `}
              alt={data.laptop.name}
            />
            <div className="col-span-2 mt-6 mx-auto text-left">
              <h3 className="font-semibold">
                {data.user.name} {data.user.surname}
              </h3>
              <h3 className="mt-3">
                {data.laptop.name}
              </h3>

              <Link to={`/laptops/${data.laptop.id}`}>
                <p className="mt-12 text-[#4386A9] hover:underline">
                  მეტის ნახვა
                </p>
              </Link>
            </div>
          </div>

        );
      })
      }
    </div>
  );
};

export default LaptopsList;

