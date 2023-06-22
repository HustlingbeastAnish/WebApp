import React from "react";
import { useRef } from "react";
import { Link as scrollLink } from "react-scroll";
import TrackLogo from "../images/cclogo.png";
function Navbar(props) {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const gotoServices = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="p-1 bg-gray-700 shadow md:flex md:items-center md:justify-between fixed top-0 w-full">
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
              fontSize: "25px",
            }}
            className="text-xl hover:text-cyan-500 text-extrabold duration-500 font-extrabold text-white"
          >
            HOME
          </a>
        </li>
        <scrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => gotoServices(aboutRef)}
        >
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/#"
              style={{
                fontSize: "25px",
              }}
              className="text-xl hover:text-cyan-500 text-extrabold duration-500 font-extrabold text-white"
            >
              ABOUT
            </a>
          </li>
        </scrollLink>

        <scrollLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => gotoServices(contactRef)}
        >
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/#"
              style={{
                fontSize: "25px",
              }}
              className="text-xl hover:text-cyan-500 duration-500 font-extrabold text-white"
            >
              CONTACT
            </a>
          </li>
        </scrollLink>
      </ul>
    </nav>
  );
}

export default Navbar;
