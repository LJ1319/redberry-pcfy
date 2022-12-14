import { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { Icon } from '@iconify-icon/react';

import fetch from '../../axios/custom';
import { useLocalStorage } from "../../useLocalStorage";
import { formData } from "../../formData";

import CustomSelect from "../layout/CustomSelect";
import BackButton from "./BackButton";
import SaveButton from "./SaveButton";

import Done from "../../assets/img/done.svg";
import Warning from "../../assets/img/warning.svg";

const LaptopInfo = () => {
  const [laptopName, setLaptopName] = useLocalStorage("laptop_name", "");
  const [brandId, setBrandId] = useLocalStorage("brand_id", "");
  const [cpu, setCpu] = useLocalStorage("cpu", "");
  const [cpuCores, setCpuCores] = useLocalStorage("cpu_cores", "");
  const [cpuThreads, setCpuThreads] = useLocalStorage("cpu_threads", "");
  const [ram, setRam] = useLocalStorage("ram", "");
  const [memoryType, setMemoryType] = useLocalStorage("memory_type", "");
  const [purchaseDate, setPurchaseDate] = useLocalStorage("purchase_date", "");
  const [laptopPrice, setLaptopPrice] = useLocalStorage("laptop_price", "");
  const [laptopCondition, setLaptopCondition] = useLocalStorage("laptop_condition", "");

  const [image, setImage] = useState("");
  const [brands, setBrands] = useState([]);
  const [cpus, setCPUs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const laptopNameInputRef = useRef();
  const cpuCoresInputRef = useRef();
  const cpuThreadsInputRef = useRef();
  const ramInputRef = useRef();
  const memoryTypeInputRef = useRef();
  const purchaseDateInputRef = useRef();
  const laptopPriceInputRef = useRef();
  const laptopConditionInputRef = useRef();

  const [isValidImage, setIsValidImage] = useLocalStorage("isValidImage", "not_filled");
  const [isValidLaptopName, setIsValidLaptopName] = useLocalStorage("isValidLaptopName", "not_filled");
  const [isValidBrand, setIsValidBrand] = useLocalStorage("isValidBrand", "not_filled");
  const [isValidCpu, setIsValidCpu] = useLocalStorage("isValidCpu", "not_filled");
  const [isValidCpuCores, setIsValidCpuCores] = useLocalStorage("isValidCpuCores", "not_filled");
  const [isValidCpuThreads, setIsValidCpuThreads] = useLocalStorage("isValidCpuThreads", "not_filled");
  const [isValidRam, setIsValidRam] = useLocalStorage("isValidRam", "not_filled");
  const [isValidMemoryType, setIsValidMemoryType] = useLocalStorage("isValidMemoryType", "not_filled");
  const [isValidPurchaseDate, setIsValidPurchaseDate] = useLocalStorage("isValidPurchaseDate", "not_filled");
  const [isValidLaptopPrice, setIsValidLaptopPrice] = useLocalStorage("isValidLaptopPrice", "not_filled");
  const [isValidLaptopCondition, setIsValidLaptopCondition] = useLocalStorage("isValidLaptopCondition", "not_filled");

  const [isValidLaptopInfo, setIsValidLaptopInfo] = useLocalStorage("isValidLaptopInfo", false);
  const [isRecorded, setIsRecorded] = useState(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleMemoryTypeChange = (event) => {
    setMemoryType(event.target.value);
  };

  const handleLaptopConditionChange = (event) => {
    setLaptopCondition(event.target.value);
  };

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

  const validate = () => {
    let regExp = /^[a-zA-Z0-9 !@#$%^&*()_+=]+$/;
    let digRegExp = /^\d+$/;

    let validImage = image !== "";
    let validLaptopName = regExp.test(laptopNameInputRef.current.value);
    let validBrand = JSON.parse(localStorage.getItem("brand")) !== "";
    let validCpu = JSON.parse(localStorage.getItem("cpu")) !== "";
    let validCpuCores = digRegExp.test(cpuCoresInputRef.current.value);
    let validCpuThreads = digRegExp.test(cpuThreadsInputRef.current.value);
    let validRam = digRegExp.test(ramInputRef.current.value);
    let validMemoryType = JSON.parse(localStorage.getItem("memory_type")) !== "";
    let validPurchaseDate = purchaseDateInputRef.current.value;
    let validLaptopPrice = digRegExp.test(laptopPriceInputRef.current.value);
    let validLaptopCondition = JSON.parse(localStorage.getItem("laptop_condition")) !== "";

    validImage ? setIsValidImage(true) : setIsValidImage(false);
    validLaptopName ? setIsValidLaptopName(true) : setIsValidLaptopName(false);
    validBrand ? setIsValidBrand(true) : setIsValidBrand(false);
    validCpu ? setIsValidCpu(true) : setIsValidCpu(false);
    validCpuCores ? setIsValidCpuCores(true) : setIsValidCpuCores(false);
    validCpuThreads ? setIsValidCpuThreads(true) : setIsValidCpuThreads(false);
    validRam ? setIsValidRam(true) : setIsValidRam(false);
    validMemoryType ? setIsValidMemoryType(true) : setIsValidMemoryType(false);
    validPurchaseDate ? setIsValidPurchaseDate(true) : setIsValidPurchaseDate(false);
    validLaptopPrice ? setIsValidLaptopPrice(true) : setIsValidLaptopPrice(false);
    validLaptopCondition ? setIsValidLaptopCondition(true) : setIsValidLaptopCondition(false);

    if (validImage && validLaptopName && validBrand && validCpu && validCpuCores && validCpuThreads && validRam && validMemoryType && validPurchaseDate && validLaptopPrice && validLaptopCondition) {
      setIsValidLaptopInfo(true);
    } else {
      setIsValidLaptopInfo(false);
    }

  };

  const submitHandler = async (event) => {
    event.preventDefault();

    let data = formData();
    if (isValidImage)
      data.append("laptop_image", image);

    const fullData = {
      name: data.get("name"),
      surname: data.get("surname"),
      team_id: data.get("team_id"),
      position_id: data.get("position_id"),
      phone_number: data.get("phone_number"),
      email: data.get("email"),
      token: data.get("token"),
      laptop_name: data.get("laptop_name"),
      laptop_image: data.get("laptop_image"),
      laptop_cpu: data.get("laptop_cpu"),
      laptop_brand_id: data.get("laptop_brand_id"),
      laptop_cpu_cores: data.get("laptop_cpu_cores"),
      laptop_cpu_threads: data.get("laptop_cpu_threads"),
      laptop_ram: data.get("laptop_ram"),
      laptop_hard_drive_type: data.get("laptop_hard_drive_type"),
      laptop_purchase_date: data.get("laptop_purchase_date"),
      laptop_price: data.get("laptop_price"),
      laptop_state: data.get("laptop_state"),
    };

    try {
      const resp = await fetch.post("/laptop/create", fullData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (resp.status === 200) {
        setIsRecorded(true);
        localStorage.clear();
      }
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <div className="w-8/12 mx-auto bg-white rounded-lg drop-shadow-2xl">
      <form onSubmit={submitHandler} className="w-8/12 mx-auto py-16">
        {!image
          ? (
            <div
              className={`
                ${!isValidImage ? "border-redberryRed bg-[#FFF1F1]" : ""}
                h-96 flex flex-col justify-center items-center rounded-2xl border-2 border-dashed border-[#4386A9] bg-[#f6f6f6]
              `}>
              {!isValidImage && <img src={Warning} alt="warning sign" className="mb-6" />}
              <span
                className={`
                ${!isValidImage ? "text-redberryRed" : ""}
                text-xl text-center text-[#4386A9] font-semibold
              `}>
                ?????????????????? ?????? ????????????????????? <br /> ???????????????????????? ????????????
              </span>
              <label
                htmlFor="file-upload"
              >
                <div className={`${!isValidImage ? "mb-12" : ""} w-56 h-16 mt-12 bg-[#62A1EB] rounded-lg text-white text-xl text-center py-4 cursor-pointer`}>
                  <input
                    type="file"
                    id="file-upload"
                    name="file-upload"
                    className="sr-only"
                    onChange={handleImageChange} />
                  ?????????????????????
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
                      ????????????????????? ?????????????????????
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )
        }

        <div className="flex my-6 border-b-2 pb-8">
          <div className="mr-20 my-5">
            <label
              htmlFor="laptop-name"
              className={`${!isValidLaptopName ? "text-redberryRed" : ""} font-semibold`}>
              ???????????????????????? ??????????????????
            </label>
            <input
              required
              type="text"
              id="laptop-name"
              placeholder="HP"
              value={laptopName}
              ref={laptopNameInputRef}
              onChange={(e) => setLaptopName(e.target.value)}
              className={`
                ${!isValidLaptopName ? "border-redberryRed focus:border-redberryRed focus:bg-white" : ""} 
                my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff] 
              `} />
            <span className={`${!isValidLaptopName ? "text-redberryRed" : ""} text-sm text-[#2e2e2e]`} >
              ???????????????????????? ??????????????????, ?????????????????????, !@#$%^&*()_+=
            </span>
          </div>

          <CustomSelect
            data={brands}
            text="???????????????????????? ??????????????????"
            name="brand"
            changeBrandId={(brandId) => setBrandId(brandId)}
          />
        </div>

        <div className="flex flex-col my-6 border-b-2 pb-8">
          <div className="flex justify-evenly">
            <CustomSelect
              data={cpus}
              text="CPU"
              name="cpu"
              changeCpu={(cpu) => setCpu(cpu)}
            />
            <div className="ml-10 my-5">
              <label htmlFor="cpu-core" className={`${!isValidCpuCores ? "text-redberryRed" : ""} font-semibold`}>
                CPU-??? ??????????????????
              </label>
              <input
                required
                type="text"
                id="cpu-core"
                placeholder="14"
                value={cpuCores}
                ref={cpuCoresInputRef}
                onChange={(e) => setCpuCores(e.target.value)}
                className={`${!isValidCpuCores ? "border-redberryRed focus:border-redberryRed focus:bg-white" : ""} my-1 p-2 text-sm w-64 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff] `} />
              <span className={`${!isValidCpuCores ? "text-redberryRed" : ""} text-sm text-[#2e2e2e]`}>
                ?????????????????? ?????????????????????
              </span>
            </div>

            <div className="ml-10 my-5">
              <label htmlFor="cpu-thread" className={`${!isValidCpuThreads ? "text-redberryRed" : ""} font-semibold`}>
                CPU-??? ??????????????????
              </label>
              <input
                required
                type="text"
                id="cpu-thread"
                placeholder="365"
                value={cpuThreads}
                ref={cpuThreadsInputRef}
                onChange={(e) => setCpuThreads(e.target.value)}
                className={`${!isValidCpuThreads ? "border-redberryRed focus:border-redberryRed focus:bg-white" : ""} my-1 p-2 text-sm w-64 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff] `} />
              <span className={`${!isValidCpuCores ? "text-redberryRed" : ""} text-sm text-[#2e2e2e]`}>
                ?????????????????? ?????????????????????
              </span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="mr-20 my-5">
              <label htmlFor="laptop-ram" className={`${!isValidRam ? "text-redberryRed" : ""} font-semibold`}>
                ???????????????????????? RAM (GB)
              </label>
              <input
                required
                type="text"
                id="laptop-ram"
                placeholder="16"
                value={ram}
                ref={ramInputRef}
                onChange={(e) => setRam(e.target.value)}
                className={`${!isValidCpuThreads ? "border-redberryRed focus:border-redberryRed focus:bg-white" : ""} selection:my-1 p-2 text-sm block w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff] focus:bg-[#f3f4ff] `} />
              <span className={`${!isValidCpuCores ? "text-redberryRed" : ""} text-sm text-[#2e2e2e]`}>
                ?????????????????? ?????????????????????
              </span>
            </div>

            <div className="mr-10 my-5">
              {!isValidMemoryType ? (
                <div className="flex">
                  <label htmlFor="memory-type" className="text-redberryRed font-semibold">
                    ????????????????????????????????? ????????????
                  </label>
                  <img src={Warning} alt="warning sign" className="ml-4 mt-0.5 h-5" />
                </div>
              ) : <label htmlFor="memory-type" className="font-semibold">
                ????????????????????????????????? ????????????
              </label>}

              <div className="flex justify-between my-4">
                <input
                  type="radio"
                  id="memory-type"
                  name="memory-type"
                  value="SSD"
                  ref={memoryTypeInputRef}
                  onChange={handleMemoryTypeChange}
                  checked={memoryType === "SSD"}
                  className="w-5 h-5 appearance-none rounded-full border-2 border-[#4D9AC3] bg-white checked:ring-inset checked:ring-8 checked:ring-offset-2 checked:ring-[#4D9AC3]"
                />
                <span className="my-[-2px] ml-4 mr-12  font-medium">SSD</span>
                <input
                  type="radio"
                  id="memory-type"
                  name="memory-type"
                  value="HDD"
                  ref={memoryTypeInputRef}
                  onChange={handleMemoryTypeChange}
                  checked={memoryType === "HDD"}
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
                ????????????????????? ?????????????????? (????????????????????????)
              </label>
              <input
                type="date"
                id="purchase-date"
                placeholder="??????/??????/??????"
                value={purchaseDate}
                ref={purchaseDateInputRef}
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff]" />
            </div>

            <div className="ml-10 my-5">
              <label htmlFor="laptop-price" className={`${!isValidLaptopPrice ? "text-redberryRed" : ""} font-semibold`}>
                ???????????????????????? ????????????
              </label>
              <div className="flex">
                <input
                  required
                  type="text"
                  id="laptop-price"
                  placeholder="0000"
                  value={laptopPrice}
                  ref={laptopPriceInputRef}
                  onChange={(e) => setLaptopPrice(e.target.value)}
                  className={`${!isValidLaptopPrice ? "border-redberryRed focus:border-redberryRed focus:bg-white" : ""} my-1 p-2 text-sm w-96 h-12 border-solid border-2 border-[#bddbef] rounded-lg focus:outline-none focus:border-[#88afff]  focus:bg-[#f3f4ff] `} />
                <div className="w-max mt-2.5 ml-[-40px]">
                  <Icon icon="tabler:currency-lari" height="2em"
                    style={{ color: "grey" }} />
                </div>
              </div>
              <span className={`${!isValidLaptopPrice ? "text-redberryRed" : ""} text-sm text-[#2e2e2e]`}>
                ?????????????????? ?????????????????????
              </span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="mr-10 my-5">
              {!isValidLaptopCondition ? (
                <div className="flex">
                  <label htmlFor="laptop-condition" className="text-redberryRed font-semibold">
                    ???????????????????????? ?????????????????????????????????
                  </label>
                  <img src={Warning} alt="warning sign" className="ml-4 mt-0.5 h-5" />
                </div>
              ) : <label htmlFor="laptop-condition" className="font-semibold">
                ???????????????????????? ?????????????????????????????????
              </label>}

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
                <span className="my-[-2px] ml-4 mr-12 font-medium">???????????????</span>
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
                <span className="my-[-2px] ml-4 font-medium">?????????????????????</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <BackButton destination="/add-info/employee-info" text="????????????" />

          {isRecorded && (<Navigate to="success" />)}
          <SaveButton
            text="????????????????????????????????????"
            validate={validate} />
        </div>
      </form >
    </div >
  );
};

export default LaptopInfo;;