import Filter from "./Filter";
import JobDisplay from "./JobDisplay";
import TopNav from "./Topnav";

const JobBoard = () => {
  return (
    <div className="flex justify-center w-full min-h-[35rem] h-screen md:px-4 px-2">
      <div className="w-full max-w-[75rem]">
        <TopNav></TopNav>
        <div className="flex items-start gap-5 w-full mt-5">
          <Filter></Filter>
          <JobDisplay></JobDisplay>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
