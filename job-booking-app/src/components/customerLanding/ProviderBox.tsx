import { FaStar } from "react-icons/fa";

const ProviderBox = ({
  image,
  name,
  rating,
  reviewCount,
  description,
}: {
  image: string;
  name: string;
  rating: string;
  reviewCount: string;
  description: string;
}) => {
  return (
    <div className="shrink-0 flex-1 w-[20rem] p-5 bg-white border-2 border-neutral-200 rounded-md text-sm">
      <div className="flex items-center gap-2">
        <img className="w-7 bg-black " src={image}></img>
        <div>
          <p>{name}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-[1px]">
          <FaStar fill={`${parseInt(rating) >= 0.5 ? "orange" : ""}`}></FaStar>
          <FaStar fill={`${parseInt(rating) >= 1.5 ? "orange" : ""}`}></FaStar>
          <FaStar fill={`${parseInt(rating) >= 2.5 ? "orange" : ""}`}></FaStar>
          <FaStar fill={`${parseInt(rating) >= 3.5 ? "orange" : ""}`}></FaStar>
          <FaStar fill={`${parseInt(rating) >= 4.5 ? "orange" : ""}`}></FaStar>
        </div>
        <p>{rating.slice(0, 3)}</p>
        <p>({reviewCount} reviews)</p>
      </div>
      <p className="w-full mt-3 overflow-hidden text-ellipsis">{description}</p>
      <div className="flex justify-between w-full mt-5">
        <button className="py-1 px-4 bg-black rounded-md text-white font-semibold cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ProviderBox;
