import { useState, type ChangeEvent } from "react";
import DropdownMenu from "../global/DropdownMenu";
import ServicesOffered from "./ServicesOffered";
import { FaPlus } from "react-icons/fa";
import { useIsInputNumber } from "../customHooks/useIsInputNumber";

const BusinessEditor = () => {
  const isInputNumber = useIsInputNumber;
  const [phoneNumberInput, setPhoneNumberInput] = useState("");

  function handlePhoneInput(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    if (isInputNumber(event)) {
      setPhoneNumberInput(inputValue);
    }
  }

  return (
    <div className="flex justify-center items-center w-full min-h-[45rem] py-5 overflow-y-auto text-sm">
      <form className="w-full max-w-[45rem] p-5 border-2 border-neutral-200">
        <h2 className="text-xl font-bold">Business Information</h2>
        <div className="flex flex-col gap-2 w-full mt-5">
          <label className="block">Business Name *</label>
          <input
            className="w-full py-1 px-3 border-2 border-neutral-200 rounded-md outline-none"
            type="text"
            placeholder="Enter your business name"
            required
          ></input>
        </div>
        <div className="flex flex-col gap-2 w-full mt-5">
          <label className="block">Business Description</label>
          <textarea
            className="w-full h-20 py-1 px-3 border-2 border-neutral-200 rounded-md outline-none resize-none"
            placeholder="Describe what your business does"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label className="block mt-5 text-sm">Category</label>
          <DropdownMenu
            width={"w-full"}
            placeholder="Select a category"
            options={["Towing", "IT Support", "Mechanic"]}
          ></DropdownMenu>
        </div>
        <ServicesOffered
          services={[{ name: "", price: 0, description: "", duration: "" }]}
        ></ServicesOffered>
        <button
          className="flex items-center gap-2 mt-3 cursor-pointer"
          type="button"
        >
          <FaPlus fontSize={"0.75rem"}></FaPlus>
          <p>Add Another Service</p>
        </button>
        <div className="w-full h-[1px] mt-7 bg-neutral-200"></div>
        <h2 className="mt-7 text-xl font-bold">Contact Information</h2>
        <div className="flex gap-2 items-center w-full mt-5">
          <div className="flex flex-1 flex-col gap-2">
            <label>Phone Number</label>
            <input
              className="w-full py-1 px-2 border-2 border-neutral-200 rounded-md outline-none"
              type="tel"
              placeholder="123-456-7890"
              maxLength={10}
              required
              onChange={(e) => {
                handlePhoneInput(e);
              }}
            ></input>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <label>Website</label>
            <input
              className="w-full py-1 px-2 border-2 border-neutral-200 rounded-md outline-none"
              type="tel"
              placeholder="http://website.com"
              maxLength={40}
            ></input>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <button
            className="py-2 px-4 border-2 bg-white border-neutral-200 rounded-md font-bold cursor-pointer"
            type="button"
          >
            Save as Draft
          </button>
          <div className="flex items-center gap-3">
            <button
              className="py-2 px-4 border-2 bg-white border-neutral-200 rounded-md font-bold cursor-pointer"
              type="button"
            >
              Cancel
            </button>
            <button
              className="py-2 px-4 bg-black border-2 border-neutral-200 rounded-md font-bold text-white cursor-pointer"
              type="submit"
            >
              Complete Setup
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessEditor;
