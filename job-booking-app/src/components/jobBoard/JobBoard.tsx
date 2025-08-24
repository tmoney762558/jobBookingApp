import { useState } from "react";
import Filter from "./Filter";
import JobDisplay from "./JobDisplay";
import TopNav from "./TopNav";
import SideNav from "../dashboard/SideNav";

interface Service {
  business_id: string;
  service_id: string;
  service_name: string;
  price: string;
  description: string;
  duration: string;
  business_name: string;
  location: string;
}

interface FetchServicesResponse {
  message?: string;
}

const JobBoard = ({ business_id }: { business_id: number }) => {
  const apiBase: string = import.meta.env.VITE_API_BASE;
  const token = localStorage.getItem("token");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("Most Relevant");
  const [services, setServices] = useState<Service[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  async function fetchMatchingServices() {
    try {
      const response = await fetch(
        `${apiBase}/services/search?query=${searchQuery}&category=${categoryFilter}&orderBy=${orderBy}`,
        {
          method: "GET",
          headers: {
            Authorization: token || "",
          },
        }
      );

      if (response.ok) {
        const apiData: Service[] = await response.json();
        setServices(apiData);
      } else {
        const errorData: FetchServicesResponse = await response.json();
        // Placeholder alert
        alert(errorData.message);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col w-full min-h-[40rem] h-screen">
      <TopNav
        setSearchQuery={setSearchQuery}
        fetchMatchingServices={fetchMatchingServices}
      ></TopNav>
      <div className="flex w-full h-full">
        <SideNav isBusinessOwner={business_id ? true : false}></SideNav>
        <div className="flex w-full justify-center lg:p-5 p-3">
          <div className="flex flex-col w-full max-w-[75rem] pb-[1rem]">
            <Filter setCategoryFilter={setCategoryFilter}></Filter>
            <JobDisplay
              setCategoryFilter={setCategoryFilter}
              setOrderBy={setOrderBy}
              services={services}
            ></JobDisplay>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
