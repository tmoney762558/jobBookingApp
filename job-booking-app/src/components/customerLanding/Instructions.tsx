const Instructions = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[30rem]">
      <div className="flex flex-col items-center w-full max-w-[75rem] py-10 px-4">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="flex lg:flex-row flex-col justify-between items-star lg:gap-0 gap-5 w-full mt-10">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center aspect-square p-5 bg-black rounded-full">
              <p className="text-white font-bold">1</p>
            </div>
            <p className="mt-4 font-semibold">Search & Compare</p>
            <p className="max-w-[20rem] text-center">
              Browse verified service providers in your area. Compare ratings,
              prices, and availability.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center aspect-square p-5 bg-black rounded-full">
              <p className="text-white font-bold">2</p>
            </div>
            <p className="mt-4 font-semibold">Book & Schedule</p>
            <p className="max-w-[20rem] text-center">
              Select your preferred provider and schedule a convenient time for
              your service.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center aspect-square p-5 bg-black rounded-full">
              <p className="text-white font-bold">3</p>
            </div>
            <p className="mt-4 font-semibold">Get It Done</p>
            <p className="max-w-[20rem] text-center">
              Enjoy professional service and rate your experience to help others
              in the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
