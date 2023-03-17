import React from "react";
import { Link } from "react-router-dom";
import TrackLogo from "../images";
function navbar() {
  return (
    <nav className="p-5 bg-gray-800 shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center ">
        <div className="">
          <img src={TrackLogo} alt="" srcset="" />
        </div>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <a
            href="/#"
            className="text-xl hover:text-cyan-500 duration-500 text-white"
          >
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="/#"
            className="text-xl hover:text-cyan-500 duration-500  text-white"
          >
            ABOUT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="/#"
            className="text-xl hover:text-cyan-500 duration-500  text-white"
          >
            CONTACT
          </a>
        </li>
        <Link
          className="bg-blue-700 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded "
          to="/signup"
        >
          Register Now
        </Link>
      </ul>
    </nav>
  );
}

export default navbar;
