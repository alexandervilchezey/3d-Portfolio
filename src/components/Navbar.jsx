import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  /*   rgba(2, 21, 36, 1) 0%,
  rgba(5, 43, 54, 1) 25%,
  rgba(1, 87, 104, 1) 50%,
  rgba(59, 137, 172, 1) 75% */

  document.onscroll = () => {
    var pos = getVerticalScrollPercentage(document.body);
    let color = [0, 0, 0];
    if (pos < 33) {
      color = getGradientColor([59, 137, 172], [1, 87, 104], pos / 33);
    } else if (pos < 66) {
      color = getGradientColor([1, 87, 104], [5, 43, 54], pos / 33 - 1);
    } else {
      color = getGradientColor([5, 43, 54], [2, 21, 36], pos / 33 - 2);
    }
    setBackgroundColor(color);
  };

  function getVerticalScrollPercentage(elm) {
    var p = elm.parentNode;
    return (
      ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) * 100
    );
  }

  function getGradientColor(color1, color2, percentage) {
    let gradientColor1 = Math.round(
      color1[0] + (color2[0] - color1[0]) * percentage
    );
    let gradientColor2 = Math.round(
      color1[1] + (color2[1] - color1[1]) * percentage
    );
    let gradientColor3 = Math.round(
      color1[2] + (color2[2] - color1[2]) * percentage
    );
    return [gradientColor1, gradientColor2, gradientColor3];
  }

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState([59, 137, 172]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
      style={{
        background: `rgb(${backgroundColor[0]},${backgroundColor[1]},${backgroundColor[2]})`,
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Alex&nbsp;<span className="sm:block hidden"> | JS Mastery</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-active" : "text-secondary"
              } hover:text-active text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-9 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-none flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-active" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
