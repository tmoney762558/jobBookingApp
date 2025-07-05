import DropdownMenu from "../global/DropdownMenu";
import { IoLocationSharp } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import FilterSm from "./FilterSm";

const JobDisplay = () => {
  return (
    <div className="flex flex-1 flex-col h-fit">
      <div className="flex md:flex-row flex-col justify-between gap-2 w-full">
        <h1 className="text-xl font-semibold">Frontend Developer Jobs</h1>
        <div className="flex items-center gap-2">
          <p className="shrink-0 text-sm">Sort By:</p>
          <DropdownMenu
            width="w-[8.5rem]"
            placeholder="Most Relevant"
            options={["Most Relevant", "Price"]}
          ></DropdownMenu>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="md:mt-0 mt-2 text-sm">1,246 jobs found</p>
        <div className="lg:hidden block">
          <FilterSm></FilterSm>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full max-h-[70vh] min-h-[20rem] mt-5 overflow-y-auto">
        <div className="w-full p-5 border-2 border-neutral-200 rounded-md">
          <h2>Senior Frontend Developer</h2>
          <p className="text-sm">TechCorp Inc.</p>
          <div className="flex md:flex-row flex-col md:items-center items-start gap-3  w-full mt-1 text-sm">
            <div className="flex items-center gap-1">
              <IoLocationSharp className="fill-neutral-600"></IoLocationSharp>
              <p>San Francisco, CA</p>
            </div>
            <div className="flex items-center gap-1">
              <BsClock className="fill-neutral-600"></BsClock>
              <p>Full-time</p>
            </div>
            <div className="flex items-center gap-1">
              <FaDollarSign className="fill-neutral-600"></FaDollarSign>
              <p>$120k - $180k</p>
            </div>
          </div>
          <p className="mt-2 text-sm">
            We're looking for a senior frontend developer to join our growing
            team. You'll work on cutting-edge web applications using React,
            TypeScript, and modern tooling.
          </p>
          <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-5 w-full mt-5 text-sm">
            <div className="flex sm:flex-nowrap flex-wrap sm:justify-center items-center gap-2">
              <p className="px-4 bg-neutral-100 rounded-full">React</p>
              <p className="px-4 bg-neutral-100 rounded-full">TypeScript</p>
              <p className="px-4 bg-neutral-100 rounded-full">Node.js</p>
            </div>
            <div className="flex justify-end items-center w-full gap-2">
              <p>2 days ago</p>
              <button className="py-1 px-4 bg-black rounded-sm text-white font-semibold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDisplay;
