import React from "react";
import { Link } from "react-router-dom";
import TrackLogo from "../images/TrackLogo.png";
function navbar() {
  return (
    <nav className=" bg-gray-600 shadow md:flex md:items-center md:justify-between fixed top-0 w-full">
      <div className="flex justify-between items-center ">
        <span className=" cursor-pointer">
          <img
            src={TrackLogo}
            alt=""
            width="60px"
            height="60px"
            style={{
              borderRadius: "30px",
            }}
          />
        </span>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <a
            href="/#"
            style={{
              fontFamily: "Labrada",
              fontSize: "25px",
            }}
            className="text-xl hover:text-cyan-500 duration-500 text-white"
          >
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="/#"
            style={{
              fontFamily: "Labrada",
              fontSize: "25px",
            }}
            className="text-xl hover:text-cyan-500 duration-500  text-white"
          >
            ABOUT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="/#"
            style={{
              fontFamily: "Labrada",
              fontSize: "25px",
            }}
            className="text-xl hover:text-cyan-500 duration-500  text-white"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
