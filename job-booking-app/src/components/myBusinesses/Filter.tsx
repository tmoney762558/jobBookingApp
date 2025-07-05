import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Filter = () => {
    const [currentFilter, setCurrentFilter] = useState("All");

  return (
    <div className="flex flex-1 justify-between items-end w-full">
    <div className="flex items-center gap-3">
      <p>Filter by status:</p>
      <div className="flex items-center gap-2">
        <button
          className={`py-1 px-5 ${
            currentFilter === "All"
              ? "bg-black text-white"
              : "bg-white border-neutral-200 text-black"
          } border-2 rounded-sm text-sm font-bold cursor-pointer`}
          onClick={() => setCurrentFilter("All")}
        >
          All
        </button>
        <button
          className={`py-1 px-5 ${
            currentFilter === "Active"
              ? "bg-black text-white"
              : "bg-white border-neutral-200 text-black"
          } border-2 rounded-sm text-sm font-bold cursor-pointer`}
          onClick={() => setCurrentFilter("Active")}
        >
          Active
        </button>
        <button
          className={`py-1 px-5 ${
            currentFilter === "Draft"
              ? "bg-black text-white"
              : "bg-white border-neutral-200 text-black"
          } border-2 rounded-sm text-sm font-bold cursor-pointer`}
          onClick={() => setCurrentFilter("Draft")}
        >
          Draft
        </button>
        <button
          className={`py-1 px-5 ${
            currentFilter === "Paused"
              ? "bg-black text-white"
              : "bg-white border-neutral-200 text-black"
          } border-2 rounded-sm text-sm font-bold cursor-pointer`}
          onClick={() => setCurrentFilter("Paused")}
        >
          Paused
        </button>
      </div>
    </div>
    <div className="flex items-center relative">
      <FaMagnifyingGlass
        className="absolute left-2"
        fill="#737373"
      ></FaMagnifyingGlass>
      <input
        className="pl-8 py-1 bg-white border-2 border-neutral-200 rounded-md outline-none"
        placeholder="Search businesses"
      ></input>
    </div>
  </div>
  )
}

export default Filter