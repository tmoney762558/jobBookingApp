import { FaCalendar, FaPhone, FaWrench } from "react-icons/fa";
import { FaLocationDot, FaXmark } from "react-icons/fa6";
import genericUser1 from "../../assets/genericUser1.svg";

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

const JobBox = ({
  bookingId,
  service_name,
  status,
  description,
  created_at,
  location,
  current_offer,
  business_name,
  phone_number,
  customerBookings,
  setCustomerBookings,
}: {
  bookingId: string;
  service_name: string;
  status: string;
  description: string;
  created_at: string;
  location: string;
  current_offer: string;
  business_name: string;
  phone_number: string;
  customerBookings: CustomerBooking[];
  setCustomerBookings: React.Dispatch<React.SetStateAction<CustomerBooking[]>>;
}) => {
  const apiBase = import.meta.env.VITE_API_BASE;
  const token = localStorage.getItem("token");

  async function cancelBooking() {
    try {
      const response = await fetch(`${apiBase}/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          Authorization: token || "",
        },
      });

      if (response.ok) {
        const apiData = await response.json();
        // Remove customer booking from frontend
        setCustomerBookings(
          customerBookings.filter((booking) => booking.id !== bookingId)
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
              <div className="flex items-center gap-1">
                <FaPhone></FaPhone>
                <p>{phone_number}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-end items-start lg:mt-0 mt-3">
          <p className="lg:block hidden px-3 bg-neutral-100 border-2 border-neutral-200 rounded-sm">
            {status}
          </p>
          <p className="font-semibold">Cost: {current_offer}</p>
        </div>
      </div>
      <div className="flex justify-between lg:items-center items-start w-full lg:mt-10 mt-3">
        <div className="flex items-center gap-2">
          <img className="w-7 bg-black rounded-full" src={genericUser1}></img>
          <p className="text-sm">{business_name}</p>
        </div>
        <div className="flex items-center gap-2 lg:mt-0 mt-2 text-sm">
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

export default JobBox;
