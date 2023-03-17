import React from "react";

function footer() {
  return (
    <footer>
      <div className="bg-gray-800 pb-2">
        <span className="text-2xl font-[Poppins] cursor-pointer text-white text-center">
          <h2 className="mb-4 pt-4">TracKnAlert</h2>
        </span>
        <div className="text-center mb-4">
          <input
            className="text-center mr-1 ml-1 rounded-lg"
            type="email"
            placeholder="Enter your email"
          ></input>
          <button className="bg-cyan-400 hover:bg-cyan-700 rounded-lg pl-1 pr-1">
            Subscribe Now!
          </button>
        </div>
        <hr className="w-11/12 m-auto"></hr>
        <div className="mb-2 mt-2">
          <div className="w-1/3 inline-block text-center">
            <a href="/#" className="text-white hover:text-cyan-500">
              About us
            </a>
          </div>
          <div className="w-1/3 inline-block text-center">
            <a href="/#" className="text-white hover:text-cyan-500">
              Our team
            </a>
          </div>
          <div className="w-1/3 inline-block text-center">
            <a href="/#" className="text-white hover:text-cyan-500">
              Contact us
            </a>
          </div>
        </div>
        <hr className="w-11/12 m-auto"></hr>
        <div className="text-center mt-2">
          <h3 className="text-white inline">Follow us on :</h3>
          <a href="/#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="..."
              className="h-6 w-6 inline ml-4"
            ></img>
          </a>
          <a href="/#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="..."
              className="h-6 w-6 inline ml-4"
            ></img>
          </a>
          <a href="/#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111398.png"
              alt="..."
              className="h-6 w-6 inline ml-4"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default footer;
