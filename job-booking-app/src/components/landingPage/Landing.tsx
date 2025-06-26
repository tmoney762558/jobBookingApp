import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import CTA from "./CTA";
import Features from "./Features";

const Landing = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Features></Features>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
      <CTA></CTA>
    </div>
  );
};

export default Landing;
