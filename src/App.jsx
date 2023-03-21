import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import { fish } from "./assets";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 deep-sea-gradient  overflow-hidden">
        <div className="">
          <img src={fish} className="fish sea1" />
          <img src={fish} className="fish sea2" />
          <img src={fish} className="fish sea3" />
          <img src={fish} className="fish sea4" />
          <img src={fish} className="fish sea5" />
          <img src={fish} className="fish sea6" />
          <img src={fish} className="fish sea7" />
          <img src={fish} className="fish sea8" />
          <img src={fish} className="fish sea9" />
          <img src={fish} className="fish sea10" />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
