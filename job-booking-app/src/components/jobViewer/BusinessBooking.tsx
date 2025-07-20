import { FaCalendar, FaCheck, FaWrench } from "react-icons/fa";
import { FaLocationDot, FaXmark } from "react-icons/fa6";
import genericUser1 from "../../assets/genericUser1.svg";

const BusinessBooking = ({
  customer_name,
  service_name,
  status,
  description,
  created_at,
  location,
  current_offer,
}: {
  customer_name: string;
  service_name: string;
  status: string;
  description: string;
  created_at: string;
  location: string;
  current_offer: string;
}) => {
  return (
    <div className="w-full p-3 border-2 border-neutral-200 rounded-md">
      <div className="flex lg:flex-row flex-col justify-between items-start w-full text-sm">
        <div className="flex lg:flex-row flex-col items-start gap-3">
          <div className="p-5 bg-neutral-300 rounded-md">
            <FaWrench className="fill-white text-xl"></FaWrench>
          </div>
          <div>
            <h3>{service_name}</h3>
            <p className="text-neutral-500">{description}</p>
            <div className="flex lg:flex-row flex-col lg:items-center items-start gap-3 lg:mt-0 mt-3">
              <div className="flex items-center gap-1">
                <FaCalendar></FaCalendar>
                <p>{created_at}</p>
              </div>
              <div className="flex items-center gap-1">
                <FaLocationDot></FaLocationDot>
                <p>{location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-end items-start lg:mt-0 mt-3">
          <p className="lg:block hidden px-3 bg-neutral-100 border-2 border-neutral-200 rounded-sm">
            {status}
          </p>
          <p className="font-semibold">Offer: {current_offer}</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start w-full lg:mt-10 mt-3">
        <div className="flex items-center gap-2">
          <img className="w-7 bg-black rounded-full" src={genericUser1}></img>
          <p className="text-sm">{customer_name}</p>
        </div>
        <div className="flex items-center gap-2 lg:mt-0 mt-2 text-sm">
          <button className="h-7 px-4 border-2 border-neutral-200 font-semibold cursor-pointer">
            <FaCheck className="fill-green-500 text-xl"></FaCheck>
          </button>
          <button className="h-7 px-4 border-2 border-neutral-200 font-semibold cursor-pointer">
            <FaXmark className="fill-red-500 text-xl"></FaXmark>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessBooking;
