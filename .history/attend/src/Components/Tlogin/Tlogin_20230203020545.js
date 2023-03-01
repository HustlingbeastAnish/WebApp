import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNavbar from "../StudentSection/SideNavbar";
const Tlogin = (props) => {
  // To open and close the sidebar
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const currUser = props.userData;

  const str = enhanceName(currUser.name);

  //jwt authorisation

  const callTlogin = async () => {
    try {
      const res = await fetch("/aftertlogin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      props.setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        // navigate("/tlogin");
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/loginteach");
    }
  };

  //logout functionality
  const handlelogout = () => {
    str = str.toString();
    // console.log(str[0]);
    console.log("yeah");
    fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        navigate("/loginteach");
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    callTlogin();
  }, []);

  function enhanceName(str) {
    var fullName = str.toLowerCase().split(" ");
    for (var i = 0; i < fullName.length; i++) {
      fullName[i] = fullName[i][0].toUpperCase() + fullName[i].slice(1);
    }
    // currUser.name = fullName;
    console.log(fullName);
    return fullName.join(" ");
  }
  return (
    <div>
      <h3 className="text-3xl font-semibold text-gray-700 mb-6 ml-10 text-center ">
        Welcome Prof. {str}
      </h3>
      <div className="flex">
        <div>
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
                  fillRule="evenodd"
                  s
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
          <SideNavbar open={open} currUser={currUser} isTeach={true} />
        </div>
        <div className=" ml-5 flex flex-col">
          <div className="">
            <div className="md:flex flex-start">
              <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <a
                    href="#!"
                    className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                  >
                    CREATE NEW CLASS
                  </a>
                </div>
                <p className="text-gray-700 mb-6">
                  Looorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper
                </p>
                <Link to="/createattend">
                  <button
                    type="button"
                    className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                  >
                    Create
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="md:flex flex-start">
              <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <a
                    href="#!"
                    className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                  >
                    UPDATE CLASS
                  </a>
                </div>
                <p className="text-gray-700 mb-6">
                  Looorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper
                </p>
                <Link to="/selectstud">
                  <button
                    type="button"
                    className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                  >
                    UPDATE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div className="flex justify-between mb-4">
                <a
                  href="/#"
                  className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                >
                  TAKE ATTENDANCE
                </a>
              </div>
              <p className="text-gray-700 mb-6">
                Looorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque scelerisque diam non nisi semper
              </p>
              <Link to="/takeattend">
                <button
                  type="button"
                  className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                >
                  TAKE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Tlogin;
