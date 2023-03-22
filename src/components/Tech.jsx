import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((techonology) => (
        <div className="w-28 h-28" key={techonology.name}>
          <BallCanvas icon={techonology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
