const Introduction = () => {
  return (
    <div className="flex justify-center min-h-[50rem] px-4">
      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-5 w-full max-w-[75rem]">
        <div className="lg:flex-1 lg:mt-0 mt-[5rem]">
          <h1 className="w-full lg:text-left text-center lg:text-[3rem] text-[2rem] font-bold">
            Book Jobs. Manage Projects. Get Paid.
          </h1>
          <p className="lg:w-full mt-3 lg:text-left text-center">
            The all-in-one platform for freelancers and service providers to
            manage bookings, track projects, and handle payments seamlessly.
          </p>
          <div className="flex lg:justify-start justify-center items-center gap-3 mt-3">
            <button className="py-2 px-4 bg-black rounded-md text-white cursor-pointer">
              Start Free Trial
            </button>
            <button className="py-2 px-4 border-[1px] border-neutral-300 rounded-md cursor-pointer">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="lg:flex-1 lg:w-full md:w-3/4 w-full lg:mt-0 mt-5">
          <div className="flex justify-center items-center w-full aspect-video bg-neutral-300 rounded-md">
            <p>Dashboard Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
