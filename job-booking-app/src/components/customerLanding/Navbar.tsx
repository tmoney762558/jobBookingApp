import { FaBriefcase } from "react-icons/fa";
import genericUser1 from "../../assets/genericUser1.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full py-3 px-4 text-sm border-b-[1px] border-neutral-300">
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
      </div>
    </nav>
  );
};

export default Navbar;
