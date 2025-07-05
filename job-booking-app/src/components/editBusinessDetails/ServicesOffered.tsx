import { FaTrash } from "react-icons/fa";
import DropdownMenu from "../global/DropdownMenu";

interface Service {
  name: string;
  price: number;
  description: string;
  duration: string;
}

const ServicesOffered = ({ services }: { services: Service[] }) => {
  return (
    <div>
      {services.map((service) => (
        <div className="flex flex-col gap-2 w-full mt-5">
          <label className="block text-xl font-bold">Services Offered</label>
          <div className="flex flex-col w-full p-3 border-2 border-neutral-200 rounded-md">
            <div className="flex gap-4 items-center">
              <div className="flex flex-1 flex-col gap-2">
                <label>Service Name *</label>
                <input
                  className="w-full py-1 px-2 border-2 border-neutral-200 rounded-md outline-none"
                  placeholder="e.g. Logo Design"
                  maxLength={25}
                  required
                  defaultValue={service.name}
                ></input>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label>Price *</label>
                <input
                  className="w-full py-1 px-2 border-2 border-neutral-200 rounded-md outline-none"
                  type="number"
                  placeholder="$  0.00"
                  maxLength={10}
                  required
                  defaultValue={service.price}
                ></input>
              </div>
            </div>
            <div className="mt-4">
              <label>Description</label>
              <textarea
                className="w-full h-20 py-1 px-3 border-2 border-neutral-200 rounded-md outline-none resize-none"
                placeholder="Describe the sevice"
                defaultValue={service.description}
              ></textarea>
            </div>
            <div className="flex justify-between items-center w-full mt-4">
              <div className="flex items-center gap-4">
                <label className="font-bold">Duration</label>
                <DropdownMenu
                  width={"w-[6.5rem]"}
                  placeholder={service.duration}
                  options={[
                    "1 hour",
                    "2 hours",
                    "3 hours",
                    "4 hours",
                    "5 hours",
                    "6 hours",
                  ]}
                ></DropdownMenu>
              </div>
              <FaTrash className="cursor-pointer" fill="#a1a1a1"></FaTrash>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesOffered;
