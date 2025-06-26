import { BsGoogle, BsMicrosoft } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";

const Authentication = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[40rem] bg-neutral-100">
      <div className="flex justify-center items-center w-full min-h-screen p-4">
        <div className="flex flex-col w-full max-w-[30rem] py-7 md:px-7 p-4 bg-white border-2 border-neutral-200 rounded-md">
          <div className="flex flex-col items-center">
            <div className="p-3 bg-black rounded-md">
              <FaBriefcase fontSize={"1.5rem"} fill="white"></FaBriefcase>
            </div>
            <h1 className="mt-3 text-center text-2xl font-bold">
              Welcome to JobBooker
            </h1>
            <p className="mt-1 text-center text-neutral-600">
              Business / Customer Login
            </p>
            <div className="flex flex-col gap-5 w-full mt-6">
              <div className="flex flex-col gap-1">
                <label className="w-full">Username</label>
                <input
                  className="w-full py-1 px-2 border-2 border-neutral-200 rounded-md"
                  type="text"
                  placeholder="Enter your username"
                ></input>
              </div>
              <div className="flex flex-col gap-1">
                <label className="w-full">Password</label>
                <input
                  className="w-full mt-1 py-1 px-2 border-2 border-neutral-200 rounded-md"
                  type="text"
                  placeholder="Enter your password"
                ></input>
              </div>
            </div>
            <div className="flex justify-between items-center w-full my-6">
              <div className="flex gap-2">
                <input type="checkbox"></input>
                <label>Remember me</label>
              </div>
            </div>
            <button className="w-full py-[0.4rem] bg-black rounded-md text-white font-bold">
              Sign In
            </button>
            <div className="flex items-center gap-2 w-full my-6">
              <span className="w-full h-[2px] bg-neutral-200"></span>
              <p className="shrink-0">Or continue with</p>
              <span className="w-full h-[2px] bg-neutral-200"></span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <button className="flex justify-center items-center gap-3 w-full py-2 border-2 border-neutral-200 cursor-pointer">
                <BsGoogle></BsGoogle>
                <p>Continue with Google</p>
              </button>
              <button className="flex justify-center items-center gap-3 w-full py-2 border-2 border-neutral-200 cursor-pointer">
                <BsMicrosoft></BsMicrosoft>
                <p>Continue with Microsoft</p>
              </button>
            </div>
            <button className="mt-7 border-b-2 border-transparent hover:border-black">
              Don't have an account? Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white"></div>
    </div>
  );
};

export default Authentication;
