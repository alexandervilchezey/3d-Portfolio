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
  Social,
} from "./components";

import { fish, shark, anglerfish, turtle } from "./assets";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 deep-sea-gradient  overflow-hidden">
        <div className="sea">
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
          <img src={fish} className="fish" />
        </div>
        <div>
          <img src={shark} className="shark" />
          <img src={shark} className="shark" />
          <img src={shark} className="shark" />
          <img src={shark} className="shark" />
          <img src={shark} className="shark" />
          <img src={shark} className="shark" />
        </div>
        <div>
          <img src={turtle} className="turtle" />
          <img src={turtle} className="turtle" />
          <img src={turtle} className="turtle" />
          <img src={turtle} className="turtle" />
          <img src={turtle} className="turtle" />
          <img src={turtle} className="turtle" />
        </div>
        <div>
          <img src={anglerfish} className="anglerfish" />
          <img src={anglerfish} className="anglerfish" />
          <img src={anglerfish} className="anglerfish" />
          <img src={anglerfish} className="anglerfish" />
          <img src={anglerfish} className="anglerfish" />
          <img src={anglerfish} className="anglerfish" />
        </div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          {/*  <StarsCanvas /> */}
        </div>
      </div>
      <Social />
    </BrowserRouter>
  );
};

export default App;
