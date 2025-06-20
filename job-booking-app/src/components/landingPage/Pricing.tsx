import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="flex justify-center items-center py-10 px-4 bg-neutral-100 border-2 border-neutral-100" id="pricing">
      <div className="w-full max-w-[75rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-3">Choose the plan that fits your needs</p>
        </div>
        <div className="grid grid-rows-1 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 min-h-[25rem] mt-[3rem]">
          <div className="flex flex-col row-span-1 col-span-1 p-7 bg-white border-2 border-neutral-200 shadow-lg">
            <h3 className="text-lg font-semibold">Starter</h3>
            <div className="flex items-center gap-1">
              <p className="text-xl font-bold">$19</p>
              <p className="text-sm">/month</p>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex items-center gap-3 mt-5">
                <FaCheck fill="grey"></FaCheck>
                <p>Up to 50 bookings/month</p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <FaCheck fill="grey"></FaCheck>
                <p>Basic project tracking</p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <FaCheck fill="grey"></FaCheck>
                <p>Email support</p>
              </div>
            </div>
            <button className="self-end w-full mt-[3rem] py-3 border-2 border-neutral-200 rounded-md cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="flex flex-col relative row-span-1 col-span-1 p-7 bg-white rounded-md border-2 border-black shadow-lg">
            <p className="absolute top-[-12px] left-1/2 translate-x-[-50%] w-fit px-3 bg-black rounded-full text-white">
              Popular
            </p>
            <h3 className="text-lg font-semibold">Professional</h3>
            <div className="flex items-center gap-1">
              <p className="text-xl font-bold">$49</p>
              <p className="text-sm">/month</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 mt-5">
                <FaCheck></FaCheck>
                <p>Unlimited bookings</p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <FaCheck></FaCheck>
                <p>Advanced project tracking</p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <FaCheck></FaCheck>
                <p>Payment processing</p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <FaCheck></FaCheck>
                <p>Priority support</p>
              </div>
            </div>
            <button className="self-end w-full mt-[3rem] py-3 bg-black rounded-md text-white font-bold cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="flex flex-col row-span-1 col-span-1 p-7 bg-white border-2 border-neutral-200 shadow-lg">
            <h3 className="text-lg font-semibold">Enterprise</h3>
            <div className="flex items-center gap-1">
              <p className="text-xl font-bold">$99</p>
              <p className="text-sm">/month</p>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex items-center gap-3 mt-5">
                <FaCheck fill="grey"></FaCheck>
                <p>Everything in Professional</p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <FaCheck fill="grey"></FaCheck>
                <p>Team Collaboration</p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <FaCheck fill="grey"></FaCheck>
                <p>Custom integrations</p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <FaCheck fill="grey"></FaCheck>
                <p>Dedicated support</p>
              </div>
            </div>
            <button className="self-end w-full mt-[3rem] py-3 border-2 border-neutral-200 rounded-md cursor-pointer">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
