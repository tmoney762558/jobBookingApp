import { FaBriefcase, FaDollarSign } from "react-icons/fa";
import { GrScheduleNew } from "react-icons/gr";
import { PiChartLineUp } from "react-icons/pi";

const QuickStats = () => {
  return (
    <div className="flex gap-5 mt-10 overflow-x-auto">
      <div className="flex h-[10rem] flex-col aspect-video p-5 border-2 border-neutral-200 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-neutral-600">Total Jobs</p>
            <p className="text-2xl font-bold">247</p>
          </div>
          <div className="p-3 bg-neutral-200 rounded-md">
            <FaBriefcase fontSize={"1.2rem"}></FaBriefcase>
          </div>
        </div>
        <div className="flex flex-1 max-w-full items-center">
          <p className="text-neutral-600">+12% from last month</p>
        </div>
      </div>
      <div className="flex h-[10rem] flex-col aspect-video p-5 border-2 border-neutral-200 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-neutral-600">Active Bookings</p>
            <p className="text-2xl font-bold">247</p>
          </div>
          <div className="p-3 bg-neutral-200 rounded-md">
            <GrScheduleNew fontSize={"1.2rem"}></GrScheduleNew>
          </div>
        </div>
        <div className="flex flex-1 max-w-full items-center">
          <p className="text-neutral-600">+3 from yesterday</p>
        </div>
      </div>
      <div className="flex h-[10rem] flex-col aspect-video p-5 border-2 border-neutral-200 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-neutral-600">Revenue</p>
            <p className="text-2xl font-bold">$12,540</p>
          </div>
          <div className="p-3 bg-neutral-200 rounded-md">
            <FaDollarSign fontSize={"1.2rem"}></FaDollarSign>
          </div>
        </div>
        <div className="flex flex-1 max-w-full items-center">
          <p className="text-neutral-600">+8% from last month</p>
        </div>
      </div>
      <div className="flex h-[10rem] flex-col aspect-video p-5 border-2 border-neutral-200 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-neutral-600">Completion Rate</p>
            <p className="text-2xl font-bold">94%</p>
          </div>
          <div className="p-3 bg-neutral-200 rounded-md">
            <PiChartLineUp fontSize={"1.2rem"}></PiChartLineUp>
          </div>
        </div>
        <div className="flex flex-1 max-w-full items-center">
          <p className="text-neutral-600">+2% from last week</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
