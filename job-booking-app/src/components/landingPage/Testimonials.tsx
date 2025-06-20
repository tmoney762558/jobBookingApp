import genericUser1 from "../../assets/genericUser1.svg";
import genericUser2 from "../../assets/genericUser2.svg";
import genericUser3 from "../../assets/genericUser3.svg";

const Testimonials = () => {
  return (
    <div className="flex justify-center items-center py-[4rem] px-4" id="testimonials">
      <div className="w-full max-w-[75rem]">
        <div className="flex flex-col items-center">
          <h2 className="lg:text-left text-center text-3xl font-bold">
            Trusted by thousands of professionals
          </h2>
          <p className="lg:text-left text-center mt-3">See what our users have to say</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 w-full min-h-[14rem] mt-[3rem]">
          <div className="p-5 row-span-1 col-span-1 bg-neutral-200 rounded-md">
            <div className="flex items-center gap-4">
              <img className="w-10 aspect-square" src={genericUser1}></img>
              <h3>Sarah Johnson</h3>
            </div>
            <p className="mt-3">
              "JobBooker has completely transformed how I manage my freelance
              business. The booking system is intuitive and my clients love it."
            </p>
          </div>
          <div className="p-5 row-span-1 col-span-1 bg-neutral-200 rounded-md">
            <div className="flex items-center gap-4">
              <img className="w-10 aspect-square" src={genericUser2}></img>
              <h3>Mike Chen</h3>
            </div>
            <p className="mt-3">
              "The payment integration saved me hours of administrative work. I
              can focus on what I do best while JobBooker handles the rest."
            </p>
          </div>
          <div className="p-5 row-span-1 col-span-1 bg-neutral-200 rounded-md">
            <div className="flex items-center gap-4">
              <img className="w-10 aspect-square" src={genericUser3}></img>
              <h3>Jermaine Davis </h3>
            </div>
            <p className="mt-3">
              "The project tracking features help me stay organized and keep my
              clients informed. It's been a game-changer for my business."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
