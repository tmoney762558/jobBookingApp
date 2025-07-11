import { FaBriefcase, FaSearch } from "react-icons/fa";
import genericUser1 from "../../assets/genericUser1.svg";
import { CiBellOn } from "react-icons/ci";

const TopNav = () => {
  return (
    <nav className="flex justify-between items-center gap-3 w-full py-2">
      <div className="flex items-center gap-3 w-full">
        <div className="lg:flex hidden flex-1 justify-start items-center gap-2">
          <div className="p-2 bg-black rounded-md">
            <FaBriefcase fontSize={"0.9rem"} fill="white"></FaBriefcase>
          </div>
          <p className="lg:block hidden font-bold">JobBooker</p>
        </div>
        <div className="flex items-center relative w-full">
          <FaSearch className="absolute left-2" fontSize={"0.75rem"}></FaSearch>
          <input
            className="w-full max-w-[20rem] py-1 pl-7 bg-neutral-200 rounded-md text-sm"
            placeholder="Search for Businesses"
          ></input>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <CiBellOn className="shrink-0 text-[1.7rem]"></CiBellOn>
        <img className="w-7 bg-black rounded-full" src={genericUser1}></img>
      </div>
    </nav>
  );
};

export default TopNav;
