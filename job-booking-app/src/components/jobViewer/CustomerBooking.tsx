import { FaCalendar, FaClock, FaWrench } from "react-icons/fa";
import { FaLocationDot, FaXmark } from "react-icons/fa6";
import genericUser1 from "../../assets/genericUser1.svg";

const JobBox = () => {
  return (
    <div className="w-full p-3 border-2 border-neutral-200 rounded-md">
      <div className="flex lg:flex-row flex-col justify-between items-start w-full text-sm">
        <div className="flex lg:flex-row flex-col items-start gap-3">
          <div className="p-5 bg-neutral-300 rounded-md">
            <FaWrench className="fill-white text-xl"></FaWrench>
          </div>
          <div>
            <h3>Home Plumbing Repair</h3>
            <p className="text-neutral-500">
              Fix kitchen sink leak and replace faucet
            </p>
            <div className="flex lg:flex-row flex-col lg:items-center items-start gap-3 lg:mt-0 mt-3">
              <div className="flex items-center gap-1">
                <FaCalendar></FaCalendar>
                <p>Jan 15, 2025</p>
              </div>
              <div className="flex items-center gap-1">
                <FaClock></FaClock>
                <p>2:00 PM</p>
              </div>
              <div className="flex items-center gap-1">
                <FaLocationDot></FaLocationDot>
                <p>134 Main St.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-end items-start lg:mt-0 mt-3">
          <p className="lg:block hidden px-3 bg-neutral-100 border-2 border-neutral-200 rounded-sm">
            Confirmed
          </p>
          <p className="font-semibold">Cost: $150</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start w-full lg:mt-10 mt-3">
        <div className="flex items-center gap-2">
          <img className="w-7 bg-black rounded-full" src={genericUser1}></img>
          <p className="text-sm">Mike's Plumbing Services</p>
        </div>
        <div className="flex items-center gap-2 lg:mt-0 mt-2 text-sm">
          <button className="px-2 border-2 border-neutral-200 font-semibold cursor-pointer">
            Message
          </button>
          <button className="h-7 px-4 border-2 border-neutral-200 font-semibold cursor-pointer">
            <FaXmark className="fill-red-500 text-xl"></FaXmark>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobBox;
