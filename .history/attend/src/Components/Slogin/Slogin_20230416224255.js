import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNavbar from "../StudentSection/SideNavbar";

function Slogin(props) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  //jwt authorisation
  const [userData, setUserData] = useState({});
  const callSlogin = async () => {
    try {
      const res = await fetch("/afterslogin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      props.setAuthorizedStud(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/loginstud");
    }
  };
  useEffect(() => {
    callSlogin();
  }, []);

  return (
    <div className="p-1 border-black-500 bg-gray-400">
      <div className="text-center text-3xl">
        <h2 className="font-semibold">Welcome {userData.name}</h2>
      </div>
      <button
        // className={`${open && "rotate-180"}`}
        style={{ width: "40px", height: "28px", margin: "8px" }}
        onClick={(e) => {
          setOpen(!open);
        }}
      >
        <div
          class={`relative w-10 h-10 overflow-hidden bg-gray-${
            !open ? 700 : 100
          } rounded-full dark:bg-gray-600`}
        >
          <svg
            class="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
      <div className="flex ">
        <SideNavbar open={open} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class=" p-6 h bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 md:h-1/2 lg:h-2/5">
            <a href="/#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Click to check Intership Opportunities
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              See the list of Opportunities Available
            </p>
            <Link to="/job">
              <a
                href="/#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
          <div class="max-w-sm p-6 bg-white border  h-2/5 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <Link to="/checkattend">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Check Attendance in the respective subjects
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Get details for your attendance percentage ,number of present
                days ,number of leaves etc
              </p>
              <a
                href="/#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
          <div class="max-w-sm p-6 bg-white border  h-2/5 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <Link to="/grades">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Track your Grades
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Track your grades and marks here and get pictorial view of your
                grades
              </p>
              <a
                href="/#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slogin;
