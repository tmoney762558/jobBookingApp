import { useState } from "react";
import DropdownMenu from "../global/DropdownMenu";
import { FaPlus } from "react-icons/fa";

const NewService = () => {
  const apiBase = import.meta.env.API_BASE;
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  async function createService() {
    try {
      if (!apiBase) {
        return console.log("API_BASE could not be found.");
      }

      const response = await fetch(apiBase + "", {
        method: "POST",
        headers: {
          Authorization: token || "",
        },
        body: JSON.stringify({
          name,
          price,
          description,
          duration,
        }),
      });

      if (response.ok) {
        // Placeholder alert
        alert("Successfully created the service.");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <label className="block mt-7 text-xl font-bold">Add Service</label>
      <div className="flex flex-col gap-2 w-full mt-5">
        <div className="flex flex-col w-full p-3 border-2 border-neutral-200 rounded-md">
          <div className="flex gap-4 items-center">
            <div className="flex flex-1 flex-col gap-2">
              <label>Service Name *</label>
              <input
                className="w-full py-1 px-2 border-2 border-neutral-200 rounded-md outline-none"
                placeholder="e.g. Logo Design"
                maxLength={25}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="mt-4">
            <label>Description</label>
            <textarea
              className="w-full h-20 py-1 px-3 border-2 border-neutral-200 rounded-md outline-none resize-none"
              placeholder="Describe the sevice"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="flex justify-between items-center w-full mt-4">
            <div className="flex items-center gap-4">
              <label className="font-bold">Duration</label>
              <DropdownMenu
                width={"w-[9rem]"}
                placeholder={"Duration"}
                options={[
                  "1 hour",
                  "2 hours",
                  "3 hours",
                  "4 hours",
                  "5 hours",
                  "6 hours",
                ]}
                setterFunction={setDuration}
              ></DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      <button
        className="flex items-center gap-2 mt-3 cursor-pointer"
        type="button"
        onClick={createService}
      >
        <FaPlus fontSize={"0.75rem"}></FaPlus>
        <p>Add Another Service</p>
      </button>
    </>
  );
};

export default NewService;
