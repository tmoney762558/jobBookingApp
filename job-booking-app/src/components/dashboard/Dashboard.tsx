import Navbar from "../global/Navbar";
import RecentBookings from "./RecentBookings";
import SideNav from "./SideNav";
import QuickStats from "./QuickStats";

const Dashboard = ({ businessId }: { businessId: number }) => {
  return (
    <div className="flex flex-col w-full min-h-[40rem] h-screen">
      <Navbar></Navbar>
      <div className="flex w-full h-full">
        <SideNav></SideNav>
        <div className="flex w-full justify-center lg:p-5 p-3">
          <div className="flex flex-col w-full max-w-[75rem] pb-[1rem]">
            <div className="flex justify-between w-full">
              <div className="w-full">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p>Welcome back, here's some info about your business.</p>
              </div>
            </div>
            <div className="hidden">
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
