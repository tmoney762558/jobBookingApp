import CTA from "./components/landingPage/CTA";
import Features from "./components/landingPage/Features";
import Introduction from "./components/landingPage/Introduction";
import Navbar from "./components/landingPage/Navbar";
import Pricing from "./components/landingPage/Pricing";
import Testimonials from "./components/landingPage/Testimonials";

const App = () => {
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

export default App;
