import { CiLocationOn } from "react-icons/ci";
import DropdownMenu from "../global/DropdownMenu";
import { FaFilter } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="lg:block hidden">
      <nav className="lg:block hidden w-[20rem] p-5 bg-white border-2 border-neutral-200 overflow-y-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Filters</p>
            <FaFilter></FaFilter>
          </div>
          <button className="text-sm text-neutral-500 rounded-md cursor-pointer">
            Clear all
          </button>
        </div>
        <p className="mt-5 font-semibold">Location</p>
        <div className="flex items-center relative mt-2">
          <CiLocationOn
            className="absolute left-2"
            fontSize={"1rem"}
          ></CiLocationOn>
          <input
            className="w-full py-1 pl-7 pr-2 border-2 border-neutral-500 rounded-md outline-0 text-sm"
            placeholder="City, state, or remote"
          ></input>
        </div>
        <p className="mt-7 font-semibold">Job Type</p>
        <ul className="flex flex-col gap-2 mt-2 text-sm">
          <li className="flex items-center gap-2">
            <input type="checkbox"></input>
            <label>Labor</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox"></input>
            <label>Education</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox"></input>
            <label>Childcare</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox"></input>
            <label>Entertainment</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox"></input>
            <label>Freelance</label>
          </li>
        </ul>
        <div className="w-full h-[1px] my-3 bg-neutral-200"></div>
        <p className="font-semibold">Experience Level</p>
        <ul className="flex flex-col gap-2 mt-2 text-sm">
          <li className="flex items-center gap-2">
            <input type="checkbox"></input>
            <label>Entry level</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox"></input>
            <label>Mid level</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox"></input>
            <label>Senior level</label>
          </li>
        </ul>
        <div className="w-full h-[1px] my-3 bg-neutral-200"></div>
        <p className="font-semibold">Cost</p>
        <div className="flex justify-between items-center w-full mt-2">
          <input
            className="w-[7.5rem] py-1 pl-3 pr-2 border-2 border-neutral-500 rounded-md outline-none"
            type="number"
            placeholder="Min"
          ></input>
          <input
            className="w-[7.5rem] py-1 pl-3 pr-2 border-2 border-neutral-500 rounded-md outline-none"
            type="number"
            placeholder="Max"
          ></input>
        </div>
        <div className="mt-3">
          <DropdownMenu
            width="w-full"
            placeholder="Salary"
            options={["Salary", "Hourly", "Fee"]}
          ></DropdownMenu>
        </div>
        <button className="w-full mt-3 py-2 bg-black rounded-md text-white font-semibold cursor-pointer">
          Confirm Selection
        </button>
      </nav>
    </div>
  );
};

export default Filter;
