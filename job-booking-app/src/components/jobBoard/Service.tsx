import { BsClock } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Service = ({
  service_name,
  price,
  description,
  duration,
  business_name,
  location,
}: {
  service_name: string;
  price: string;
  description: string;
  duration: string;
  business_name: string;
  location: string;
}) => {
  return (
    <div className="w-full p-5 border-2 border-neutral-200 rounded-md">
      <h2>{service_name}</h2>
      <p className="text-sm">{business_name}</p>
      <div className="flex md:flex-row flex-col md:items-center items-start gap-3  w-full mt-1 text-sm">
        <div className="flex items-center gap-1">
          <IoLocationSharp className="fill-neutral-600"></IoLocationSharp>
          <p>{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <BsClock className="fill-neutral-600"></BsClock>
          <p>{duration}</p>
        </div>
        <div className="flex items-center gap-1">
          <FaDollarSign className="fill-neutral-600"></FaDollarSign>
          <p>{price}</p>
        </div>
      </div>
      <p className="mt-2 text-sm">{description}</p>
      <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-5 w-full mt-5 text-sm">
        {/*
        TODO: Add tag support in future update
        
        <div className="flex sm:flex-nowrap flex-wrap sm:justify-center items-center gap-2">
          <p className="px-4 bg-neutral-100 rounded-full">React</p>
          <p className="px-4 bg-neutral-100 rounded-full">TypeScript</p>
          <p className="px-4 bg-neutral-100 rounded-full">Node.js</p>
        </div>
        */}
        <div className="flex justify-end items-center w-full gap-2">
          <p>2 days ago</p>
          <button className="py-1 px-4 bg-black rounded-sm text-white font-semibold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
