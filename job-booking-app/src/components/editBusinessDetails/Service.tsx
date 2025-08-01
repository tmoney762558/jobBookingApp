import { useState } from "react";
import DropdownMenu from "../global/DropdownMenu";

const Service = ({
  defaultName,
  defaultPrice,
  defaultDescription,
  defaultDuration,
  serviceId,
}: {
  defaultName: string;
  defaultPrice: string;
  defaultDescription: string;
  defaultDuration: string;
  serviceId: number;
}) => {
  const apiBase = import.meta.env.API_BASE;
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  async function editService() {
    try {
      const response = await fetch(apiBase + `/services/${serviceId}`, {
        method: "PUT",
        headers: {
          Authorization: token || "",
        },
        body: JSON.stringify({
          title: name,
          price,
          description,
          duration,
        }),
      });

      if (response.ok) {
        // Placeholder alert
        console.log("Successfully edited the service.");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
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
              defaultValue={defaultName}
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
              defaultValue={defaultPrice}
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
            defaultValue={defaultDescription}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex items-center gap-4">
            <label className="font-bold">Duration</label>
            <DropdownMenu
              width={"w-[6.5rem]"}
              placeholder={defaultDuration}
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
          <div className="flex items-center gap-3 text-sm">
            <button className="py-1 px-4 bg-black rounded-sm text-white cursor-pointer" type="button" onClick={() => editService}>Save</button>
            <button className="py-1 px-4 border-2 border-neutral-200 rounded-sm cursor-pointer" type="button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
