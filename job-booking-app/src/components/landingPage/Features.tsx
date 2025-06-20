import { BiLineChart } from "react-icons/bi";
import { FaCalendar, FaCreditCard, FaMobile } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

const Features = () => {
  return (
    <div className="flex justify-center items-center py-10 px-4 bg-neutral-100" id="features">
      <div className="flex flex-col justify-center items-center w-full max-w-[75rem]">
        <div className="flex flex-col items-center">
          <h2 className="lg:text-left text-center text-3xl font-bold">
            Everything you need to run your business
          </h2>
          <p className="lg:text-left text-center mt-3">
            Powerful Features designed for modern service providers
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full min-h-[40rem] mt-5">
          <div className="row-span-1 col-span-1 p-5 bg-white border-2 border-neutral-300 rounded-md shadow-lg">
            <div className="w-fit p-2 bg-neutral-100 rounded-md">
              <FaCalendar></FaCalendar>
            </div>
            <h3 className="mt-2 font-bold">Smart Booking</h3>
            <p className="mt-3">
              Let clients book your services online with intelligent scheduling
              and avaliability management.
            </p>
          </div>
          <div className="row-span-1 col-span-1 p-5 bg-white border-2 border-neutral-300 rounded-md shadow-lg">
            <div className="w-fit p-2 bg-neutral-100 rounded-md">
              <BiLineChart></BiLineChart>
            </div>
            <h3 className="mt-2 font-bold">Project Tracking</h3>
            <p className="mt-3">
              Monitor project progress, set milestones, and keep clients updated
              with real-time dashboards.
            </p>
          </div>
          <div className="row-span-1 col-span-1 p-5 bg-white border-2 border-neutral-300 rounded-md shadow-lg">
            <div className="w-fit p-2 bg-neutral-100 rounded-md">
              <FaCreditCard></FaCreditCard>
            </div>
            <h3 className="mt-2 font-bold">Secure Payments</h3>
            <p className="mt-3">
              Accept payments online, send invoices, and track your revenue with
              integrated payment processing.
            </p>
          </div>
          <div className="row-span-1 col-span-1 p-5 bg-white border-2 border-neutral-300 rounded-md shadow-lg">
            <div className="w-fit p-2 bg-neutral-100 rounded-md">
              <IoIosPeople></IoIosPeople>
            </div>
            <h3 className="mt-2 font-bold">Project Tracking</h3>
            <p className="mt-3">
              Organize client information, communication history, and project
              details in one place.
            </p>
          </div>
          <div className="row-span-1 col-span-1 p-5 bg-white border-2 border-neutral-300 rounded-md shadow-lg">
            <div className="w-fit p-2 bg-neutral-100 rounded-md">
              <FaMobile></FaMobile>
            </div>
            <h3 className="mt-2 font-bold">Mobile Ready</h3>
            <p className="mt-3">
              Access your business on the go with our responsive design and
              mobile apps.
            </p>
          </div>
          <div className="row-span-1 col-span-1 p-5 bg-white border-2 border-neutral-300 rounded-md shadow-lg">
            <div className="w-fit p-2 bg-neutral-100 rounded-md">
              <FaGear></FaGear>
            </div>
            <h3 className="mt-2 font-bold">Automation</h3>
            <p className="mt-3">
              Automate repetitive tasks like follow-ups, reminders, and status
              updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
