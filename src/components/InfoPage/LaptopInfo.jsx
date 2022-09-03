import { useState, useEffect } from "react";
import { Icon } from '@iconify-icon/react';

import fetch from '../../axios/custom';
import { useLocalStorage } from "../../useLocalStorage";

import CustomSelect from "../layout/CustomSelect";
import BackButton from "./BackButton";
import SaveButton from "./SaveButton";

import Done from "../../assets/img/done.svg";
import { useRef } from "react";

// import { brands as localBrands } from "../../data";
// import { cpus as localCPUs } from "../../data";

const LaptopInfo = () => {

  const [laptopName, setLaptopName] = useLocalStorage("laptop_name", "");
  const [cpuCores, setCpuCores] = useLocalStorage("cpu_cores", "");
  const [cpuThreads, setCpuThreads] = useLocalStorage("cpu_threads", "");
  const [ram, setRam] = useLocalStorage("ram", "");
  const [memoryType, setMemoryType] = useLocalStorage("memory_type", "");
  const [purchaseDate, setPurchaseDate] = useLocalStorage("purchase_date", "");
  const [laptopPrice, setLaptopPrice] = useLocalStorage("laptop_price", "");
  const [laptopCondition, setLaptopCondition] = useLocalStorage("laptop_condition", "");

  const [image, setImage] = useState(null);
  const [brands, setBrands] = useState("");
  const [cpus, setCPUs] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const laptopNameInputRef = useRef();
  const cpuCoresInputRef = useRef();
  const cpuThreadsInputRef = useRef();
  const ramInputRef = useRef();
  const memoryTypeInputRef = useRef();
  const purchaseDateInputRef = useRef();
  const laptopPriceInputRef = useRef();
  const laptopConditionInputRef = useRef();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleMemoryTypeChange = (event) => {
    setMemoryType(event.target.value);
  };
  const handleLaptopConditionChange = (event) => {
    setLaptopCondition(event.target.value);
  };

  // console.log(image);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const brandsData = await fetch("/brands");
      const cpusData = await fetch("/cpus");

      setBrands(brandsData.data.data);
      setCPUs(cpusData.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-8/12 mx-auto bg-white rounded-lg drop-shadow-2xl">
      <form className="w-8/12 mx-auto py-16">
        {!image
          ? (
            <div className="h-96 flex flex-col justify-center items-center rounded-2xl border-2 border-dashed border-[#4386A9] bg-[#f6f6f6]">
              <span className="text-xl text-center text-[#4386A9]">
                ჩააგდე ან ატვირთე <br /> ლეპტოპის ფოტო
              </span>
              <label
                htmlFor="file-upload"
              >
                <div className="w-56 h-16 mt-12 bg-[#62A1EB] rounded-lg text-white text-xl  text-center py-4 cursor-pointer">
                  <input
                    type="file"
                    id="file-upload"
                    name="file-upload"
                    className="sr-only"
                    onChange={handleImageChange} />
                  ატვირთე
                </div>
              </label>
            </div>)
          : (
            <div className="mt-12 mb-20 h-96 w-full mx-auto flex flex-col justify-center items-center">
              <div className="h-full">
                <img
                  src={URL.createObjectURL(image)}
                  className="h-full rounded-2xl"
                  alt="uploaded"
                />
              </div>

              <div className="flex w-full justify-between">
                <div className="flex mt-16">
                  <img src={Done} alt="done icon" className="h-6" />
                  <span className="ml-4">{image.name}, </span>
                  <span className="ml-2 text-[#5F5F5F]">
                    {Math.floor(image.size / 1024)} mb
                  </span>
                </div>

                <div className="ml-24">
                  <label
                    htmlFor="file-upload"
                  >
                    <div className="w-56 h-16 mt-12 bg-[#62A1EB] rounded-lg text-white text-xl text-center py-4 cursor-pointer">
                      <input
                        type="file"
                        id="file-upload"
                        name="file-upload"
                        className="sr-only"
                        onChange={handleImageChange} />
                      თავიდან ატვირთე
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )
        }

        <div className="flex my-6 border-b-2 pb-8">
          <div className="mr-20 my-5">
            <label htmlFor="laptop-name" className="font-semibold">
              ლეპტოპის სახელი
            </label>
            <input
              type="text"
              id="laptop-name"
              placeholder="HP"
              value={laptopName}
              ref={laptopNameInputRef}
              onChange={(e) => setLaptopName(e.target.value)}
              className="my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]" />
            <span className="text-sm text-[#2e2e2e]">
              ლათინური ასოები, ციფრები, !@#$%^&*()_+=
            </span>
          </div>

          <CustomSelect data={brands} text="ლეპტოპის ბრენდი" />
        </div>

        <div className="flex flex-col my-6 border-b-2 pb-8">
          <div className="flex justify-evenly">
            <CustomSelect data={cpus} text="CPU" />
            <div className="ml-10 my-5">
              <label htmlFor="cpu-core" className="font-semibold">
                CPU-ს ბირთვი
              </label>
              <input
                type="text"
                id="cpu-core"
                placeholder="14"
                value={cpuCores}
                ref={cpuCoresInputRef}
                onChange={(e) => setCpuCores(e.target.value)}
                className="my-1 p-2 text-sm w-64 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]" />
              <span className="text-sm text-[#2e2e2e]">
                მხოლოდ ციფრები
              </span>
            </div>

            <div className="ml-10 my-5">
              <label htmlFor="cpu-thread" className="font-semibold">
                CPU-ს ნაკადი
              </label>
              <input
                type="text"
                id="cpu-thread"
                placeholder="365"
                value={cpuThreads}
                ref={cpuThreadsInputRef}
                onChange={(e) => setCpuThreads(e.target.value)}
                className="my-1 p-2 text-sm w-64 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]" />
              <span className="text-sm text-[#2e2e2e]">
                მხოლოდ ციფრები
              </span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="mr-20 my-5">
              <label htmlFor="laptop-ram" className="font-semibold">
                ლეპტოპის RAM (GB)
              </label>
              <input
                type="text"
                id="laptop-ram"
                placeholder="16"
                value={ram}
                ref={ramInputRef}
                onChange={(e) => setRam(e.target.value)}
                className="my-1 p-2 text-sm block w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]" />
              <span className="text-sm text-[#2e2e2e]">
                მხოლოდ ციფრები
              </span>
            </div>

            <div className="mr-10 my-5">
              <label htmlFor="memory-type" className="font-semibold">
                მეხსიერების ტიპი
              </label>
              <div className="flex justify-between my-4">
                <input
                  type="radio"
                  id="memory-type"
                  name="memory-type"
                  value="ssd"
                  ref={memoryTypeInputRef}
                  onChange={handleMemoryTypeChange}
                  checked={memoryType === "ssd"}
                  className="w-5 h-5 appearance-none rounded-full border-2 border-[#4D9AC3] bg-white checked:ring-inset checked:ring-8 checked:ring-offset-2 checked:ring-[#4D9AC3]"
                />
                <span className="my-[-2px] ml-4 mr-12  font-medium">SSD</span>
                <input
                  type="radio"
                  id="memory-type"
                  name="memory-type"
                  value="hdd"
                  ref={memoryTypeInputRef}
                  onChange={handleMemoryTypeChange}
                  checked={memoryType === "hdd"}
                  className="w-5 h-5 appearance-none rounded-full border-2 border-[#4D9AC3] bg-white checked:ring-inset checked:ring-8 checked:ring-offset-2 checked:ring-[#4D9AC3]"
                />
                <span className="my-[-2px] ml-4  font-medium">HDD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-6">
          <div className="flex justify-between">
            <div className="mr-10 my-5">
              <label htmlFor="purchase-date" className="font-semibold">
                შეძენის რიცხვი (არჩევითი)
              </label>
              <input
                type="date"
                id="purchase-date"
                placeholder="დდ/მმ/წწ"
                value={purchaseDate}
                ref={purchaseDateInputRef}
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]" />
            </div>

            <div className="ml-10 my-5">
              <label htmlFor="laptop-price" className="font-semibold">
                ლეპტოპის ფასი
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="laptop-price"
                  placeholder="0000"
                  value={laptopPrice}
                  ref={laptopPriceInputRef}
                  onChange={(e) => setLaptopPrice(e.target.value)}
                  className="my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]" />
                <div className="w-max mt-2.5 ml-[-40px]">
                  <Icon icon="tabler:currency-lari" height="2em"
                    style={{ color: "grey" }} />
                </div>
              </div>
              <span className="text-sm text-[#2e2e2e]">
                მხოლოდ ციფრები
              </span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="mr-10 my-5">
              <label htmlFor="laptop-condition" className="font-semibold">
                ლეპტოპის მდგომარეობა
              </label>
              <div className="flex justify-between my-4">
                <input
                  type="radio"
                  id="laptop-condition"
                  name="laptop-condition"
                  value="new"
                  ref={laptopConditionInputRef}
                  onChange={handleLaptopConditionChange}
                  checked={laptopCondition === "new"}
                  className="w-5 h-5 appearance-none rounded-full border-2 border-[#4D9AC3] bg-white checked:ring-inset checked:ring-8 checked:ring-offset-2 checked:ring-[#4D9AC3]"
                />
                <span className="my-[-2px] ml-4 mr-12 font-medium">ახალი</span>
                <input
                  type="radio"
                  id="laptop-condition"
                  name="laptop-condition"
                  value="used"
                  ref={laptopConditionInputRef}
                  onChange={handleLaptopConditionChange}
                  checked={laptopCondition === "used"}
                  className="w-5 h-5 appearance-none rounded-full border-2 border-[#4D9AC3] bg-white checked:ring-inset checked:ring-8 checked:ring-offset-2 checked:ring-[#4D9AC3]"
                />
                <span className="my-[-2px] ml-4 font-medium">მეორადი</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <BackButton destination="/add-info/employee-info" text="უკან" />
          <SaveButton destination="/success" text="დამახსოვრება" />
        </div>
      </form >
    </div >
  );
};

export default LaptopInfo;;