import { FaCalendar, FaCheck, FaWrench } from "react-icons/fa";
import { FaLocationDot, FaXmark } from "react-icons/fa6";
import genericUser1 from "../../assets/genericUser1.svg";

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

const BusinessBooking = ({
  bookingId,
  customer_name,
  service_name,
  status,
  description,
  created_at,
  location,
  current_offer,
  businessBookings,
  setBusinessBookings,
}: {
  bookingId: string;
  customer_name: string;
  service_name: string;
  status: string;
  description: string;
  created_at: string;
  location: string;
  current_offer: string;
  businessBookings: BusinessBooking[];
  setBusinessBookings: React.Dispatch<React.SetStateAction<BusinessBooking[]>>;
}) => {
  const apiBase = import.meta.env.VITE_API_BASE;
  const token = localStorage.getItem("token");

  async function acceptBooking() {
    try {
      const response = await fetch(`${apiBase}/bookings/accept/${bookingId}`, {
        method: "PUT",
        headers: {
          Authorization: token || "",
        },
      });

      if (response.ok) {
        const apiData = await response.json();
        setBusinessBookings(
          businessBookings.map((booking) =>
            booking.id === bookingId
              ? { ...booking, status: "Accepted" }
              : booking
          )
        );
        // Placeholder alert
        alert(apiData.message);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function cancelBooking() {
    try {
      const response = await fetch(`${apiBase}/bookings/owner/${bookingId}`, {
        method: "DELETE",
        headers: {
          Authorization: token || "string",
        },
      });

      if (response.ok) {
        const apiData = await response.json();
        setBusinessBookings(
          businessBookings.filter((booking) => booking.id !== bookingId)
        );
        // Placeholder alert
        alert(apiData.message);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full p-3 border-2 border-neutral-200 rounded-md">
      <div className="flex lg:flex-row flex-col justify-between items-start w-full text-sm">
        <div className="flex lg:flex-row flex-col items-start gap-3">
          <div className="p-5 bg-neutral-300 rounded-md">
            <FaWrench className="fill-white text-xl"></FaWrench>
          </div>
          <div>
            <h3>{service_name}</h3>
            <p className="text-neutral-500">{description}</p>
            <div className="flex lg:flex-row flex-col lg:items-center items-start gap-3 lg:mt-0 mt-3">
              <div className="flex items-center gap-1">
                <FaCalendar></FaCalendar>
                <p>{created_at}</p>
              </div>
              <div className="flex items-center gap-1">
                <FaLocationDot></FaLocationDot>
                <p>{location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-end items-start lg:mt-0 mt-3">
          <p className="lg:block hidden px-3 bg-neutral-100 border-2 border-neutral-200 rounded-sm">
            {status}
          </p>
          <p className="font-semibold">Price: {current_offer}</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full lg:mt-10 mt-3">
        <div className="flex items-center gap-2">
          <img className="w-7 bg-black rounded-full" src={genericUser1}></img>
          <p className="text-sm">{customer_name}</p>
        </div>
        <div className="flex items-center gap-2 lg:mt-0 mt-2 text-sm">
          <button
            className="h-7 px-4 border-2 border-neutral-200 font-semibold cursor-pointer"
            onClick={acceptBooking}
          >
            <FaCheck className="fill-green-500 text-xl"></FaCheck>
          </button>
          <button
            className="h-7 px-4 border-2 border-neutral-200 font-semibold cursor-pointer"
            onClick={cancelBooking}
          >
            <FaXmark className="fill-red-500 text-xl"></FaXmark>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessBooking;
