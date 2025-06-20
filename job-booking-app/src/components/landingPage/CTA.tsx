const CTA = () => {
  return (
    <div className="flex justify-center items-center py-[5rem] px-4 bg-black">
      <div className="flex flex-col justify-center items-center w-full max-w-[75rem] text-center">
        <h2 className="text-3xl text-white">
          Ready to streamline your business?
        </h2>
        <p className="text-center text-white mt-2">
          Join thousands of professionals who trust JobBooker to manage their
          services.
        </p>
        <div className="flex gap-3 mt-5">
          <button className="py-1 px-5 bg-white rounded-md cursor-pointer">Start Free Trial</button>
          <button className="py-1 px-5 border-2 border-neutral-700 rounded-md text-white cursor-pointer">Schedule Demo</button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
