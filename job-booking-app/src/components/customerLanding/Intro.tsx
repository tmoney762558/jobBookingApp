import { useState, type ChangeEvent } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useIsInputNumber } from "../customHooks/useIsInputNumber";
const Intro = () => {
  const [searchInput, setSearchInput] = useState("");
  const [zipInput, setZipInput] = useState("");
  const isInputNumber = useIsInputNumber;

  function validateZipInput(event: ChangeEvent<HTMLInputElement>) {
    const isValidInput = isInputNumber(event);
    const inputValue = event.target.value;
    if (isValidInput) {
      setZipInput(inputValue);
    }
  }

  return (
    <div className="flex justify-center w-full bg-neutral-100">
      <div className="flex flex-col justify-center items-center w-full max-w-[75rem] min-h-[30rem] px-4 py-10">
        <h1 className="text-center text-3xl font-semibold">
          Find Your Perfect Service Provider
        </h1>
        <p className="mt-3 text-center">
          Book trusted professionals for all your home and business needs.
        </p>
        <div className="flex items-center w-full max-w-[40rem] h-9 mt-6 text-[12px]">
          <div className="flex flex-2 items-center relative h-full border-2 border-r-0 border-neutral-400">
            <FaMagnifyingGlass className="absolute left-3 z-10 cursor-pointer"></FaMagnifyingGlass>
            <input
              className="w-full h-full pl-8 pr-1 bg-white outline-none"
              type="text"
              placeholder="Search for service"
              onChange={(e) => setSearchInput(e.target.value)}
            ></input>
          </div>
          <div className="flex items-center w-[1px] h-full bg-white border-y-2 border-neutral-400">
            <div className="absolute w-[1px] h-5 z-10 bg-neutral-400"></div>
          </div>
          <div className="flex flex-1 items-center relative max-w-[7.5rem] h-full border-y-2 border-neutral-400">
            <FaLocationArrow className="absolute left-3 z-10 cursor-pointer"></FaLocationArrow>
            <input
              className="w-full h-full pl-8 pr-1 bg-white outline-none"
              type="text"
              placeholder="Zip"
              maxLength={5}
              onChange={(e) => validateZipInput(e)}
            ></input>
          </div>
          <button className="h-full lg:px-5 px-3 bg-black text-white font-semibold cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
