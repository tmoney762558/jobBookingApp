import { FaCalendar, FaDollarSign } from "react-icons/fa";
import { FaGear, FaPeopleGroup } from "react-icons/fa6";
import { PiChartLineUp } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const SideNav = ({ isBusinessOwner }: { isBusinessOwner: boolean }) => {
  const navigate = useNavigate();
  return (
    <nav className="lg:flex hidden flex-col items-center gap-3 lg:w-[15rem] md:w-[10rem] w-fit h-full pt-5 lg:px-5 px-1 border-r-[1px] border-neutral-300">
      <button
        className={`flex items-center gap-3 w-full py-1 lg:px-3 px-2 hover:bg-neutral-200 rounded-sm cursor-pointer`}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <PiChartLineUp fontSize={"1.3rem"}></PiChartLineUp>
        <p className="md:block hidden text-sm">Dashboard</p>
      </button>
      <button
        className={`flex items-center gap-3 w-full py-1 lg:px-3 px-2 hover:bg-neutral-200 rounded-sm cursor-pointer`}
        onClick={() => {
          navigate("/bookings")
        }}
      >
        <FaCalendar fontSize={"1.3rem"}></FaCalendar>
        <p className="md:block hidden text-sm">Bookings</p>
      </button>
      {isBusinessOwner ? (
        <button
          className={`flex items-center gap-3 w-full py-1 lg:px-3 px-2 hover:bg-neutral-200 rounded-sm cursor-pointer`}
        >
          <FaPeopleGroup fontSize={"1.3rem"}></FaPeopleGroup>
          <p className="md:block hidden text-sm">Clients</p>
        </button>
      ) : null}
      <button
        className={`flex items-center gap-3 w-full py-1 lg:px-3 px-2 hover:bg-neutral-200 rounded-sm cursor-pointer`}
      >
        <FaDollarSign fontSize={"1.3rem"}></FaDollarSign>
        <p className="md:block hidden text-sm">Payments</p>
      </button>
      <button
        className={`flex items-center gap-3 w-full py-1 lg:px-3 px-2
        hover:bg-neutral-200 rounded-sm cursor-pointer`}
      >
        <FaGear fontSize={"1.3rem"}></FaGear>
        <p className="md:block hidden text-sm">Settings</p>
      </button>
    </nav>
  );
};

export default SideNav;
