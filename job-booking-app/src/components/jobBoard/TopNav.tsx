import { FaBriefcase, FaSearch } from "react-icons/fa";
import genericUser1 from "../../assets/genericUser1.svg";
import { CiBellOn } from "react-icons/ci";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const TopNav = ({
  setSearchQuery,
  fetchMatchingServices,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  fetchMatchingServices: () => Promise<void>;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="flex lg:justify-between items-center w-full py-3 px-4 text-sm border-b-[1px] border-neutral-300">
      <div className="flex flex-1 items-center gap-3">
        <div className="lg:flex hidden flex-1 justify-start items-center gap-2">
          <div className="p-2 bg-black rounded-md">
            <FaBriefcase fontSize={"0.9rem"} fill="white"></FaBriefcase>
          </div>
          <p className="lg:block hidden font-bold">JobBooker</p>
        </div>
      </div>
      <form
        className="flex flex-1 items-center relative w-full max-w-[50rem]"
        onSubmit={(e) => {
          e.preventDefault();
          fetchMatchingServices();
        }}
      >
        <FaSearch className="absolute left-2" fontSize={"0.75rem"}></FaSearch>
        <input
          className="w-full py-1 pl-7 bg-neutral-200 rounded-md text-sm"
          placeholder="Search for Services"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        ></input>
      </form>
      <div className="flex flex-1 justify-end items-center gap-3">
        <CiBellOn className="shrink-0 text-[1.7rem]"></CiBellOn>
        <div className="lg:hidden flex justify-end relative">
          {!dropdownOpen ? (
            <BiMenu
              className="cursor-pointer"
              fontSize={"1.5rem"}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            ></BiMenu>
          ) : (
            <CgClose
              className="cursor-pointer"
              fontSize={"1.5rem"}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            ></CgClose>
          )}
          {dropdownOpen ? (
            <ul className="flex flex-col items-end absolute top-[2.3rem]">
              <li className="w-full py-1 px-4 bg-white hover:bg-neutral-200 border-2 border-b-0 border-neutral-200 z-10 cursor-pointer">
                Dashboard
              </li>
              <li className="w-full py-1 px-4 bg-white hover:bg-neutral-200 border-2 border-b-0 border-neutral-200 z-10 cursor-pointer">
                Bookings
              </li>
              <li className="w-full py-1 px-4 bg-white hover:bg-neutral-200 border-2 border-b-0 border-neutral-200 z-10 cursor-pointer">
                Clients
              </li>
              <li className="w-full py-1 px-4 bg-white hover:bg-neutral-200 border-2 border-b-0 border-neutral-200 z-10 cursor-pointer">
                Payments
              </li>
              <li className="w-full py-1 px-4 bg-white hover:bg-neutral-200 border-2 border-neutral-200 z-10 cursor-pointer">
                Settings
              </li>
            </ul>
          ) : null}
        </div>
        <img className="w-7 bg-black rounded-full" src={genericUser1}></img>
      </div>
    </nav>
  );
};

export default TopNav;
