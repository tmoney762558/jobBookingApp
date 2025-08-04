import { useState } from "react";
import Filter from "./Filter";
import JobDisplay from "./JobDisplay";
import TopNav from "./TopNav";

interface Service {
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

const JobBoard = () => {
  const apiBase: string = import.meta.env.VITE_API_BASE;
  const token = localStorage.getItem("token");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("Most Relevant");
  const [services, setServices] = useState<Service[]>([]);

  async function fetchMatchingServices() {
    try {
      const response = await fetch(
        `${apiBase}/services/search?query=${searchQuery}&orderBy=${orderBy}`,
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
    <div className="flex justify-center w-full min-h-[35rem] h-screen md:px-4 px-2">
      <div className="w-full max-w-[75rem]">
        <TopNav setSearchQuery={setSearchQuery} fetchMatchingServices={fetchMatchingServices}></TopNav>
        <div className="flex items-start gap-5 w-full mt-5">
          <Filter></Filter>
          <JobDisplay setOrderBy={setOrderBy} services={services}></JobDisplay>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
