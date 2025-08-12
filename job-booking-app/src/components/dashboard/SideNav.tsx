import { FaCalendar, FaDollarSign } from "react-icons/fa";
import { FaGear, FaPeopleGroup } from "react-icons/fa6";
import { PiChartLineUp } from "react-icons/pi";

const SideNav = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <nav className="lg:flex hidden flex-col items-center gap-3 lg:w-[15rem] md:w-[10rem] w-fit h-full pt-5 lg:px-5 px-1 border-r-[1px] border-neutral-300">
      <div
        className={`flex items-center gap-3 w-full py-1 lg:px-3 px-2 ${
          selected === "Dashboard" ? "bg-neutral-200" : "bg-white"
        } hover:bg-neutral-200 rounded-sm cursor-pointer`}
        onClick={() => setSelected("Dashboard")}
      >
        <PiChartLineUp fontSize={"1.3rem"}></PiChartLineUp>
        <p className="md:block hidden text-sm">Dashboard</p>
      </div>
      <div
        className={`flex items-center gap-3 w-full py-1 lg:px-3 px-2 ${
          selected === "Bookings" ? "bg-neutral-200" : "bg-white"
        } hover:bg-neutral-200 rounded-sm cursor-pointer`}
        onClick={() => setSelected("Bookings")}
      >
        <FaCalendar fontSize={"1.3rem"}></FaCalendar>
        <p className="md:block hidden text-sm">Bookings</p>
      </div>
      <div
        className={`flex items-center gap-3 w-full py-1 lg:px-3 px-2 ${
          selected === "Clients" ? "bg-neutral-200" : "bg-white"
        } hover:bg-neutral-200 rounded-sm cursor-pointer`}
        onClick={() => setSelected("Clients")}
      >
        <FaPeopleGroup fontSize={"1.3rem"}></FaPeopleGroup>
        <p className="md:block hidden text-sm">Clients</p>
      </div>
      <div
        className={`flex items-center gap-3 w-full py-1 lg:px-3 px-2 ${
          selected === "Payments" ? "bg-neutral-200" : "bg-white"
        } hover:bg-neutral-200 rounded-sm cursor-pointer`}
        onClick={() => setSelected("Payments")}
      >
        <FaDollarSign fontSize={"1.3rem"}></FaDollarSign>
        <p className="md:block hidden text-sm">Payments</p>
      </div>
      <div
        className={`flex items-center gap-3 w-full py-1 lg:px-3 px-2 ${
          selected === "Settings" ? "bg-neutral-200" : "bg-white"
        } hover:bg-neutral-200 rounded-sm cursor-pointer`}
        onClick={() => setSelected("Settings")}
      >
        <FaGear fontSize={"1.3rem"}></FaGear>
        <p className="md:block hidden text-sm">Settings</p>
      </div>
    </nav>
  );
};

export default SideNav;
