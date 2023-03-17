import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar.js";
function teachstu() {
  return (
    <div>
      <Navbar />

      <div className="h-screen flex">
        <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
          <form>
            <h1 className="text-white font-bold text-4xl font-sans">
              LOGIN AS A TEACHER
            </h1>
            <div className="flex ">
              <Link to="/loginteach">
                <button
                  type="submit"
                  className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  type="submit"
                  className="block w-28 bg-blue-200 text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
                >
                  Register Now
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="flex w-1/2 justify-center items-center bg-white">
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              LOGIN AS A STUDENT
            </h1>

            <Link to="/loginstud">
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
export default teachstu;
