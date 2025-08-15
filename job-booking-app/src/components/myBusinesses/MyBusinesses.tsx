import { FaPaintBrush, FaPlus } from "react-icons/fa";
import { BusinessCard } from "./BusinessCard";
import Filter from "./Filter";
import { useEffect, useState } from "react";

interface Business {
  id: number;
  name: string;
  description: string;
  service_count: string;
  booking_count: string;
  total_revenue: string;
}

const MyBusinesses = () => {
  const apiBase = import.meta.env.VITE_API_BASE;
  const token = localStorage.getItem("token");
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    async function fetchBusinesses() {
      try {
        const response = await fetch(`${apiBase}/businesses/info`, {
          method: "GET",
          headers: {
            Authorization: token || "",
          },
        });

        if (response.ok) {
          const apiData: Business[] = await response.json();
          setBusinesses(apiData);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchBusinesses();
  }, [apiBase, token]);

  return (
    <div className="flex justify-center w-full min-h-[45rem] h-screen p-5 bg-neutral-100 overflow-y-auto">
      <div className="flex flex-col w-full h-full p-5 max-w-[60rem] rounded-md">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="flex lg:items-start items-center flex-col gap-2">
            <h1 className="text-2xl font-bold">My Businesses</h1>
            <p className="lg:text-left text-center text-sm">
              Select a business to view and manage
            </p>
          </div>
          <button className="flex items-center gap-2 lg:mt-0 mt-3 py-2 px-5 bg-black rounded-md text-white font-bold cursor-pointer">
            <FaPlus fontSize={"0.75rem"}></FaPlus>
            <p className="text-sm">Add Business</p>
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 w-full mt-7 pb-10">
          {businesses.map((business, index) => (
            <BusinessCard
              key={index}
              icon={<FaPaintBrush fill="white"></FaPaintBrush>}
              status="Active"
              name={business.name}
              description={business.description}
              services={business.service_count}
              bookings={business.booking_count}
              revenue={business.total_revenue}
            ></BusinessCard>
          ))}
        </div>
        <div className="w-full h-[0.15rem] my-5 bg-neutral-200"></div>
        <div className="lg:block hidden pb-5">
          <Filter></Filter>
        </div>
      </div>
    </div>
  );
};

export default MyBusinesses;
