import { useState } from "react";
import DropdownMenu from "../global/DropdownMenu";
import Navbar from "../global/Navbar";
import CustomerBooking from "./CustomerBooking";
import BusinessBooking from "./BusinessBooking";

const JobViewer = () => {
  const [currentView, setCurrentView] = useState("Customer");
  const [customerBookings, setCustomerBookings] = useState(["", "", "", ""]);
  const [businessBookings, setBusinessBookings] = useState([""]);

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="flex w-full justify-center items-center px-4">
          <div className="flex flex-col w-full max-w-[75rem]">
            <div className="flex lg:flex-row flex-col justify-between items-center w-full mt-7">
              <h1 className="font-semibold">Job Management</h1>
              <div className="flex items-center gap-2 lg:mt-0 mt-4 text-sm">
                <button
                  className={`py-1 px-3 ${
                    currentView === "Customer"
                      ? "bg-black text-white"
                      : "bg-neutral-200 text-black"
                  } font-semibold cursor-pointer`}
                  onClick={() => setCurrentView("Customer")}
                >
                  User View
                </button>
                <button
                  className={`py-1 px-3 ${
                    currentView === "Business"
                      ? "bg-black text-white"
                      : "bg-neutral-200 text-black"
                  } font-semibold cursor-pointer`}
                  onClick={() => setCurrentView("Business")}
                >
                  Business View
                </button>
              </div>
            </div>
            <div className="w-full mt-7 p-5 border-2 border-neutral-200 overflow-y-auto">
              <div className="flex justify-between items-center w-full">
                <h2 className="font-semibold">
                  {currentView === "Customer"
                    ? "My Booked Jobs"
                    : "My Incoming Jobs"}
                </h2>
                <DropdownMenu
                  width="w-[7rem]"
                  placeholder="Active"
                  options={["Active", "Completed", "Cancelled"]}
                ></DropdownMenu>
              </div>
              <div className="flex flex-col gap-5 h-[50vh] min-h-[30rem] mt-5 overflow-y-auto">
                {currentView === "Customer"
                  ? customerBookings.map((booking, index) => (
                      <CustomerBooking key={index}></CustomerBooking>
                    ))
                  : businessBookings.map((booking, index) => (
                      <BusinessBooking key={index}></BusinessBooking>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobViewer;
