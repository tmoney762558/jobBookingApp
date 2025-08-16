import { useEffect, useState } from "react";
import DropdownMenu from "../global/DropdownMenu";
import Navbar from "../global/Navbar";
import CustomerBooking from "./CustomerBooking";
import BusinessBooking from "./BusinessBooking";

interface CustomerBooking {
  service_name: string;
  status: string;
  description: string;
  created_at: string;
  location: string;
  current_offer: string;
  business_name: string;
  phone_number: string;
}

interface BusinessBooking {
  customer_name: string;
  service_name: string;
  status: string;
  description: string;
  created_at: string;
  location: string;
  current_offer: string;
  business_name: string;
}

const JobViewer = ({ businessId }: { businessId: number }) => {
  const apiBase = import.meta.env.VITE_API_BASE;
  const token = localStorage.getItem("token");
  const [currentView, setCurrentView] = useState("Customer");
  const [filter, setFilter] = useState("All"); // Set this up later
  const [customerBookings, setCustomerBookings] = useState<CustomerBooking[]>(
    []
  );
  const [businessBookings, setBusinessBookings] = useState<BusinessBooking[]>(
    []
  );

  useEffect(() => {
    async function fetchCustomerBookings() {
      try {
        const response = await fetch(`${apiBase}/bookings`, {
          method: "GET",
          headers: {
            Authorization: token || "",
          },
        });

        if (response.ok) {
          const apiData: CustomerBooking[] = await response.json();
          setCustomerBookings(apiData);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchCustomerBookings();
  }, [apiBase, token]);

  async function fetchBusinessBookings() {
    try {
      const response = await fetch(`${apiBase}/bookings/${businessId}`, {
        method: "GET",
        headers: {
          Authorization: token || "",
        },
      });

      if (response.ok) {
        const apiData: BusinessBooking[] = await response.json();
        setBusinessBookings(apiData);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="flex w-full justify-center items-center px-4 pb-4">
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
                  onClick={() => {
                    setCurrentView("Business");
                    fetchBusinessBookings();
                  }}
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
                  setterFunction={setFilter}
                ></DropdownMenu>
              </div>
              <div className="flex flex-col gap-5 h-[50vh] min-h-[30rem] mt-5 overflow-y-auto">
                {currentView === "Customer"
                  ? customerBookings.map((booking, index) => (
                      <CustomerBooking
                        service_name={booking.service_name}
                        status={booking.status}
                        description={booking.description}
                        created_at={booking.created_at}
                        location={booking.location}
                        current_offer={booking.current_offer}
                        business_name={booking.business_name}
                        phone_number={booking.phone_number}
                        key={index}
                      ></CustomerBooking>
                    ))
                  : businessBookings.map((booking, index) => (
                      <BusinessBooking
                        customer_name={booking.customer_name}
                        service_name={booking.service_name}
                        status={booking.status}
                        description={booking.description}
                        created_at={booking.created_at}
                        location={booking.location}
                        current_offer={booking.current_offer}
                        key={index}
                      ></BusinessBooking>
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
