import React from "react";
import { diver } from "../assets";
import { socials } from "../constants";

const Social = () => {
  return (
    <div className="fixed bottom-2 left-5 flex flex-col gap-5">
      {socials.map((social) => (
        <div
          onClick={() => window.open(social.social_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-2/3 h-2/3 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Social;
