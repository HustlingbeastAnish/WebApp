import React from "react";
import { Link } from "react-router-dom";
import { Link as scrollLink } from "react-scroll";
import Navbar from "../Navbar/navbar.js";
import TrackLogo from "../images/cclogo.png";
import Landing2 from "../images/Landing2.svg";
import About from "../About/About.jsx";
import Footer from "../Footer/footer.js";
function teachstu() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <section class="bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
              Best App for Students
            </h1>
            <p class="max-w-2xl mb-6 font-light text-4xl text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              "Stay on track with ease - Your Management made simpler!"
            </p>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />{" "}
            <div className="flex justify-evenly items-center">
              <div>
                <h2 className=" text-white font-extrabold">Login as Teacher</h2>
                <Link to="/loginteach">
                  <button
                    type="submit"
                    className="block w-28  bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
                  >
                    Login
                  </button>
                </Link>
              </div>
              <div>
                <h2 className=" text-white font-extrabold">Login as Student</h2>
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
          <div class="mt-20 lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={Landing2}
              width="400vw"
              height="660px"
              style={{
                marginTop: "90px",
                borderRadius: "30px",
              }}
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <About />
      <Footer />
    </div>
  );
}
export default teachstu;
