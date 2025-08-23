import { FaBriefcase } from "react-icons/fa";
import genericUser1 from "../../assets/genericUser1.svg";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="flex lg:justify-between items-center w-full py-3 px-4 text-sm border-b-[1px] border-neutral-300">
      <div className="flex flex-1 justify-start items-center gap-2">
        <div className="cursor-pointer">
          <div className="p-2 bg-black rounded-md">
            <FaBriefcase fontSize={"0.9rem"} fill="white"></FaBriefcase>
          </div>
        </div>
        <p className="lg:block hidden font-bold">JobBooker</p>
      </div>
      <div className="flex flex-1 justify-end items-center gap-3">
        <img
          className="w-7 bg-black rounded-full cursor-pointer"
          src={genericUser1}
        ></img>
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
      </div>
    </nav>
  );
};

export default Navbar;
