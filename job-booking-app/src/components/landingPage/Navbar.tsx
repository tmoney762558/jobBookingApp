import { FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex lg:justify-between items-center py-3 px-4 text-sm border-b-[1px] border-neutral-300">
      <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
        <div className="p-2 bg-black rounded-md">
          <FaBriefcase fontSize={"0.9rem"} fill="white"></FaBriefcase>
        </div>
        <p className="lg:block hidden font-bold">JobBooker</p>
      </div>
      <div className="lg:flex hidden flex-1 justify-center items-center gap-3">
        <a className="cursor-pointer" href="#features">
          Features
        </a>
        <a className="cursor-pointer" href="#testimonials">
          Testimonies
        </a>
        <a className="cursor-pointer" href="#pricing">
          Pricing
        </a>
      </div>
      <div className="flex flex-1 justify-end items-center gap-4">
        <button className="cursor-pointer">Sign In</button>
        <button className="py-2 px-3 bg-black rounded-md text-white cursor-pointer">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
