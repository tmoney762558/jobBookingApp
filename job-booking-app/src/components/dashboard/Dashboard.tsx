import Navbar from "../global/Navbar";
import RecentBookings from "./RecentBookings";
import SideNav from "./SideNav";
import QuickStats from "./QuickStats";
import { useEffect, useState } from "react";

interface BusinessData {
  name: string;
  location: string;
  description: string;
  category: string;
  phone_number: string;
  website_link: string;
}

const Dashboard = ({ businessId }: { businessId: number }) => {
  const apiBase = import.meta.env.VITE_API_BASE;
  const token = localStorage.getItem("token");
  // If no business id is provided we will show the customer dashboard
  const [businessName, setBusinessName] = useState("Customer");

  useEffect(() => {
    async function fetchBusinessInfo() {
      try {
        const response = await fetch(
          `${apiBase}/businesses/fill/${businessId}`,
          {
            method: "GET",
            headers: {
              Authorization: token || "",
            },
          }
        );

        if (response.ok) {
          // TODO: Add typing for the apiData
          const apiData: BusinessData = await response.json();
          setBusinessName(apiData.name);
        }
      } catch (err) {
        console.error(err);
      }
    }

    if (businessId) {
      fetchBusinessInfo();
    }
  }, [apiBase, businessId, token]);

  return (
    <div className="flex flex-col w-full min-h-[40rem] h-screen">
      <Navbar></Navbar>
      <div className="flex w-full h-full">
        <SideNav isBusinessOwner={businessId ? true : false}></SideNav>
        <div className="flex w-full justify-center lg:p-5 p-3">
          <div className="flex flex-col w-full max-w-[75rem] pb-[1rem]">
            <div className="flex justify-between w-full">
              <div className="w-full">
                <h1 className="text-2xl font-bold">{businessName} Dashboard</h1>
                <p>Welcome back, here's some info about your business.</p>
              </div>
            </div>
            <div className="">
              <QuickStats></QuickStats>
            </div>
            <RecentBookings businessId={businessId}></RecentBookings>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
