import React, { useState } from "react";
import { Link } from "react-router-dom";
import TrackLogo from "../images/cclogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                to="/"
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                <img className="h-8 w-8" src={TrackLogo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-auto flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-semibold"
                onMouseEnter={(e) => {
                  e.target.style.color = "red";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1)";
                }}
              >
                HOME
              </Link>
              <Link
                to="/#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-semibold"
                onMouseEnter={(e) => {
                  e.target.style.color = "red";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1)";
                }}
              >
                ABOUT
              </Link>
              <Link
                to="/#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-semibold"
                onMouseEnter={(e) => {
                  e.target.style.color = "red";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1)";
                }}
              >
                CONTACT
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6 m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onMouseEnter={(e) => {
                e.target.style.color = "red";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
              }}
            >
              HOME
            </Link>
            <Link
              to="/#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onMouseEnter={(e) => {
                e.target.style.color = "red";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
              }}
            >
              ABOUT
            </Link>
            <Link
              to="/#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onMouseEnter={(e) => {
                e.target.style.color = "red";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
              }}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
