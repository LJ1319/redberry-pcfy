import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import fetch from "../axios/custom";
import NavBackButton from "../components/layout/NavBackButton";

const LaptopsPage = () => {
  const token = "37f4d5d4377097575b0104f8709ad37d";

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
    <div className="h-screen font-helvetica-neue">
      <div className="flex justify-start items-center mx-40 my-12">
        <NavBackButton destination="/" />
        <h1 className="text-4xl font-bold small-caps mx-auto">
          ჩანაწერების სია
        </h1>
      </div>


      <div className='grid justify-between grid-cols-1 gap-4 my-12 lg:grid-cols-2 w-10/12 mx-auto'>
        {userData.map((data) => {
          return (
            <div
              className='grid grid-cols-3 col-span-1 p-2 px-2 text-left border shadow-xl rounded-xl mb-6'
              key={data.laptop.id}
            >
              <img
                className='h-32 ml-10 rounded-lg w-36'
                src={data.laptop.image}
                alt={data.laptop.name}
              />
              <div className='col-span-2 ml-20 text-left'>
                <h1>
                  {data.user.name} {data.user.surname}
                </h1>
                <h1 className='mt-5'>
                  {data.laptop.name}
                </h1>

                <Link to={`/laptops/${data.laptop.id}`}>
                  <h1 className='mt-5 text-blue-400 hover:text-blue-500'>
                    სრულად ნახვა
                  </h1>
                </Link>
              </div>
            </div>

          );
        }
        )}

      </div>
      <Outlet />
    </div>
  );
};

export default LaptopsPage;;