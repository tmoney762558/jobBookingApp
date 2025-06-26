import genericUser1 from "../../assets/genericUser1.svg";

const RecentBookings = () => {
  return (
    <div className="w-full md:h-[20rem] h-[15rem] mt-5 pb-7 border-2 border-neutral-200 rounded-md overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b-2 border-neutral-200">
        <h2 className="font-semibold">Recent Bookings</h2>
        <button className="text-sm text-neutral-600 cursor-pointer">
          View all
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-5 px-5">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex md:flex-row flex-col lg:items-center items-start gap-3 w-full">
            <img className="lg:block hidden w-10" src={genericUser1}></img>
            <div>
              <p>Website Development</p>
              <p className="text-neutral-500">Sarah Johnson * Jan 15, 2025</p>
            </div>
          </div>
          <div className="flex flex-col md:items-end items-start lg:w-fit w-full">
            <p>$2,500</p>
            <p className="py-1 px-2 bg-neutral-200 rounded-md text-sm">
              Confirmed
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center w-full">
          <div className="flex md:flex-row flex-col lg:items-center items-start gap-3 w-full">
            <img className="lg:block hidden w-10" src={genericUser1}></img>
            <div>
              <p>Website Development</p>
              <p className="text-neutral-500">Sarah Johnson * Jan 15, 2025</p>
            </div>
          </div>
          <div className="flex flex-col md:items-end items-start lg:w-fit w-full">
            <p>$2,500</p>
            <p className="py-1 px-2 bg-neutral-200 rounded-md text-sm">
              Confirmed
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center w-full">
          <div className="flex md:flex-row flex-col lg:items-center items-start gap-3 w-full">
            <img className="lg:block hidden w-10" src={genericUser1}></img>
            <div>
              <p>Website Development</p>
              <p className="text-neutral-500">Sarah Johnson * Jan 15, 2025</p>
            </div>
          </div>
          <div className="flex flex-col md:items-end items-start lg:w-fit w-full">
            <p>$2,500</p>
            <p className="py-1 px-2 bg-neutral-200 rounded-md text-sm">
              Confirmed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBookings;
