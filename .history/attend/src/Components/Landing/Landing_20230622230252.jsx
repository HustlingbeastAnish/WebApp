import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Link as scrollLink } from "react-scroll";
import Navbar from "../Navbar/navbar.js";
import About from "../About/About.jsx";
import Footer from "../Footer/footer.js";
import "./Landing.css";
function Teachstu() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 flex flex-col min-h-screen">
      <Navbar about={aboutRef} contact={contactRef} />
      <section className="bg-gray-900 flex-grow" id="home">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
              Navigating College Together
            </h1>
            <p className="max-w-2xl mb-6 font-light text-4xl text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              "Stay on track with ease - Your Management made simpler!"
            </p>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
              <div>
                <h2 className="text-white font-extrabold">Login as Teacher</h2>
                <Link to="/loginteach">
                  <button
                    type="submit"
                    className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
                  >
                    Login
                  </button>
                </Link>
              </div>
              <div>
                <h2 className="text-white font-extrabold">Login as Student</h2>
                <Link to="/loginstud">
                  <button
                    type="submit"
                    className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-80 h-80 ml-10 mt-10 lg:ml-20 lg:mt-0 lg:col-span-5 lg:flex lg:mb-10">
            <img
              src="logo-color.png"
              style={{
                marginTop: "90px",
                borderRadius: "30px",
              }}
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <div className="flex-grow">
        <div className="h-screen" id="about">
          <About ref={aboutRef} />
        </div>
      </div>
    </div>
  );
}

export default Teachstu;
