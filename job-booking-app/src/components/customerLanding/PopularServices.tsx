import { FaBroom, FaHammer, FaLeaf, FaPaintRoller, FaWrench } from 'react-icons/fa'
import { FaBoltLightning } from 'react-icons/fa6'

const PopularServices = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[30rem] py-10 px-4">
    <h1 className="text-2xl font-semibold">Popular Services</h1>
    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 justify-between items-center gap-5 w-full max-w-[75rem] mt-[5rem] text-sm">
      <div className="flex flex-col items-center gap-2">
        <div className="w-fit p-5 bg-neutral-100 rounded-full">
          <FaWrench fontSize={"1.1rem"}></FaWrench>
        </div>
        <p>Plumbing</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-fit p-5 bg-neutral-100 rounded-full">
          <FaBoltLightning fontSize={"1.1rem"}></FaBoltLightning>
        </div>
        <p>Electrical</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-fit p-5 bg-neutral-100 rounded-full">
          <FaBroom fontSize={"1.1rem"}></FaBroom>
        </div>
        <p>Cleaning</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-fit p-5 bg-neutral-100 rounded-full">
          <FaHammer fontSize={"1.1rem"}></FaHammer>
        </div>
        <p>Handyman</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-fit p-5 bg-neutral-100 rounded-full">
          <FaPaintRoller fontSize={"1.1rem"}></FaPaintRoller>
        </div>
        <p>Painting</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-fit p-5 bg-neutral-100 rounded-full">
          <FaLeaf fontSize={"1.1rem"}></FaLeaf>
        </div>
        <p>Gardening</p>
      </div>
    </div>
  </div>
  )
}

export default PopularServices