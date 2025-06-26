import { FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex lg:justify-between items-center py-3 px-4 text-sm border-b-[1px] border-neutral-300">
      <div className="flex justify-start items-center gap-2 cursor-pointer">
        <div className="p-2 bg-black rounded-md">
          <FaBriefcase fontSize={"0.9rem"} fill="white"></FaBriefcase>
        </div>
        <p className="font-bold">JobBooker</p>
      </div>
    </nav>
  );
};

export default Navbar;
