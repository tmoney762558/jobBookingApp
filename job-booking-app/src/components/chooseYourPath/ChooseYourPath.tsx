import Navbar from "./Navbar";
import defaultAvatar from "../../assets/defaultAvatar.png";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChooseYourPath = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-[45rem] h-screen overflow-y-auto">
      <div className="flex shrink-0 flex-col h-1/2 justify-center">
        <Navbar></Navbar>
        <div className="flex flex-1 justify-center items-center p-5">
          <div className="max-w-[30rem]">
            <h1 className="text-center text-3xl font-bold">Choose Your Path</h1>
            <p className="mt-4 text-center">
              Whether you're looking for solutions as a customer or growing your
              business, we have the right tools for you.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 shrink-0 justify-center items-center p-5 bg-neutral-100">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 w-full lg:max-w-[57rem] max-w-[25rem]">
          <div className="flex flex-col grid-cols-1 w-full p-5 py-7 bg-white border-2 border-neutral-200 rounded-md">
            <div className="flex flex-col items-center gap-3">
              <img className="w-12 aspect-square" src={defaultAvatar}></img>
              <h2 className="text-lg font-bold">I'm a Customer</h2>
            </div>
            <p className="text-center text-sm">
              Discover products and services tailored to your needs. Browse,
              compare, and find the perfect solutions for your requirements.
            </p>
            <ul className="mt-7 text-sm">
              <li className="flex items-center gap-3">
                <FaCheck fill="#525252"></FaCheck>
                <p className="text-neutral-600">Browse marketplace</p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck fill="#525252"></FaCheck>
                <p className="text-neutral-600">Compare products</p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck fill="#525252"></FaCheck>
                <p className="text-neutral-600">Read reviews</p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck fill="#525252"></FaCheck>
                <p className="text-neutral-600">Get support</p>
              </li>
            </ul>
            <button className="w-full mt-10 py-2 bg-black rounded-md text-sm text-white font-bold cursor-pointer" onClick={() => {
              navigate("/dashboard");
            }}>
              Continue as Customer
            </button>
          </div>
          <div className="flex flex-col grid-cols-1 w-full p-5 py-7 bg-white border-2 border-neutral-200 rounded-md">
            <div className="flex flex-col items-center gap-3">
              <img className="w-12 aspect-square" src={defaultAvatar}></img>
              <h2 className="text-lg font-bold">I'm a Business Owner</h2>
            </div>
            <p className="text-center text-sm">
              Discover products and services tailored to your needs. Browse,
              compare, and find the perfect solutions for your requirements.
            </p>
            <ul className="mt-7 text-sm">
              <li className="flex items-center gap-3">
                <FaCheck fill="#525252"></FaCheck>
                <p className="text-neutral-600">List your products</p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck fill="#525252"></FaCheck>
                <p className="text-neutral-600">Manage inventory</p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck fill="#525252"></FaCheck>
                <p className="text-neutral-600">Analytics dashboard</p>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck fill="#525252"></FaCheck>
                <p className="text-neutral-600">Payment processing</p>
              </li>
            </ul>
            <button className="w-full mt-10 py-2 bg-black rounded-md text-sm text-white font-bold cursor-pointer" onClick={() => {
              navigate("/myBusinesses")
            }}>
              Continue as Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPath;
