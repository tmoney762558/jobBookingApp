import { useEffect, useState } from "react";
import DropdownMenu from "../global/DropdownMenu";
import Navbar from "../global/Navbar";
import CustomerBookingComponent from "./CustomerBooking";
import BusinessBookingComponent from "./BusinessBooking";
import SideNav from "../dashboard/SideNav";
import { useNavigate } from "react-router-dom";

interface CustomerBooking {
  id: string;
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
  id: string;
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
  const [, setFilter] = useState("All"); // Set this up later
  const [customerBookings, setCustomerBookings] = useState<CustomerBooking[]>(
    []
  );
  const [businessBookings, setBusinessBookings] = useState<BusinessBooking[]>(
    []
  );
  const navigate = useNavigate();

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

    // A businessId of 0 will signify that the user is a customer
    if (businessId) {
      fetchBusinessBookings();
    } else {
      fetchCustomerBookings();
    }
  }, [apiBase, token, businessId]);

  return (
    <div className="flex flex-col w-full min-h-[40rem] h-screen">
      <Navbar></Navbar>
      <div className="flex w-full h-full">
        <SideNav isBusinessOwner={businessId ? true : false}></SideNav>
        <div className="flex w-full justify-center lg:p-5 p-3">
          <div className="flex flex-col w-full max-w-[75rem] pb-[1rem]">
            <div className="flex lg:flex-row flex-col justify-between items-center w-full">
              <h1 className="text-2xl font-bold">Booking Management</h1>
              <button
                className="py-2 px-4 bg-black border-2 border-neutral-200 rounded-md font-bold text-white cursor-pointer"
                onClick={() => {
                  navigate("/search");
                }}
              >
                Book A Job
              </button>
            </div>
            <div className="w-full mt-7 p-5 border-2 border-neutral-200 overflow-y-auto">
              <div className="flex justify-between items-center w-full">
                <h2 className="font-semibold">
                  {businessId ? "Requested Jobs" : "Incoming Jobs"}
                </h2>
                <DropdownMenu
                  width="w-[7rem]"
                  placeholder="Active"
                  options={["Active", "Completed", "Cancelled"]}
                  setterFunction={setFilter}
                ></DropdownMenu>
              </div>
              <div className="flex flex-col gap-5 h-[50vh] min-h-[30rem] mt-5 overflow-y-auto">
                {businessId
                  ? businessBookings.map((booking, index) => (
                      <BusinessBookingComponent
                        bookingId={booking.id}
                        customer_name={booking.customer_name}
                        service_name={booking.service_name}
                        status={booking.status}
                        description={booking.description}
                        created_at={booking.created_at}
                        location={booking.location}
                        current_offer={booking.current_offer}
                        businessBookings={businessBookings}
                        setBusinessBookings={setBusinessBookings}
                        key={index}
                      ></BusinessBookingComponent>
                    ))
                  : customerBookings.map((booking, index) => (
                      <CustomerBookingComponent
                        bookingId={booking.id}
                        service_name={booking.service_name}
                        status={booking.status}
                        description={booking.description}
                        created_at={booking.created_at}
                        location={booking.location}
                        current_offer={booking.current_offer}
                        business_name={booking.business_name}
                        phone_number={booking.phone_number}
                        customerBookings={customerBookings}
                        setCustomerBookings={setCustomerBookings}
                        key={index}
                      ></CustomerBookingComponent>
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
