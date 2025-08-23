import { useEffect, useState } from "react";
import genericUser1 from "../../assets/genericUser1.svg";
import { useNavigate } from "react-router-dom";

interface Booking {
  username: string;
  name: string;
  created_at: string;
  location: string;
  current_offer: string;
  status: string;
}

const RecentBookings = ({ businessId }: { businessId: number }) => {
  const apiBase = import.meta.env.VITE_API_BASE;
  const token = localStorage.getItem("token");
  const [recentBookings, setRecentBookings] = useState<Booking[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCustomerBookings() {
      try {
        const response = await fetch(`${apiBase}/bookings/recent/customer`, {
          method: "GET",
          headers: {
            Authorization: token || "",
          },
        });

        if (response.ok) {
          const apiData: Booking[] = await response.json();
          setRecentBookings(apiData);
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function fetchBusinessBookings() {
      try {
        const response = await fetch(
          `${apiBase}/bookings/recent/business/${businessId}`,
          {
            method: "GET",
            headers: {
              Authorization: token || "",
            },
          }
        );

        if (response.ok) {
          const apiData: Booking[] = await response.json();
          setRecentBookings(apiData);
        }
      } catch (err) {
        console.log(err);
      }
    }

    if (businessId) {
      fetchBusinessBookings();
    } else {
      fetchCustomerBookings();
    }
  }, [apiBase, token, businessId]);

  return (
    <div className="w-full md:h-[20rem] h-[15rem] mt-5 pb-7 border-2 border-neutral-200 rounded-md overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b-2 border-neutral-200">
        <h2 className="font-semibold">Recent Bookings</h2>
        <button
          className="text-sm text-neutral-600 cursor-pointer"
          onClick={() => {
            navigate("/bookings");
          }}
        >
          View all
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-5 px-5">
        {recentBookings.map((booking, index) => (
          <div
            className="flex md:flex-row flex-col justify-between items-center"
            key={index}
          >
            <div className="flex md:flex-row flex-col lg:items-center items-start gap-3 w-full">
              <img className="lg:block hidden w-10" src={genericUser1}></img>
              <div>
                <p>{booking.name}</p>
                <p className="text-neutral-500">
                  {booking.username} * {booking.created_at}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:items-end items-start lg:w-fit w-full">
              <p>{booking.current_offer}</p>
              <p className="py-1 px-2 bg-neutral-200 rounded-md text-sm">
                {booking.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBookings;
