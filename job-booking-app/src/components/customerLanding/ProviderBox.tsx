import { FaStar } from "react-icons/fa";

const ProviderBox = ({
  image,
  name,
  title,
  rating,
  reviewCount,
  description,
  pricing,
}: {
  image: string;
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  description: string;
  pricing: string;
}) => {
  return (
    <div className="shrink-0 flex-1 w-full max-w-[20rem] p-5 bg-white border-2 border-neutral-200 rounded-md text-sm">
      <div className="flex items-center gap-2">
        <img className="w-7 bg-black " src={image}></img>
        <div>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-[1px]">
          <FaStar fill={`${rating >= 0.5 ? "orange" : ""}`}></FaStar>
          <FaStar fill={`${rating >= 1.5 ? "orange" : ""}`}></FaStar>
          <FaStar fill={`${rating >= 2.5 ? "orange" : ""}`}></FaStar>
          <FaStar fill={`${rating >= 3.5 ? "orange" : ""}`}></FaStar>
          <FaStar fill={`${rating >= 4.5 ? "orange" : ""}`}></FaStar>
        </div>
        <p>{rating}</p>
        <p>({reviewCount} reviews)</p>
      </div>
      <p className="mt-3">{description}</p>
      <div className="flex justify-between w-full mt-5">
        <p>From ${pricing}/hr</p>
        <button className="py-1 px-4 bg-black rounded-md text-white font-semibold cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ProviderBox;
