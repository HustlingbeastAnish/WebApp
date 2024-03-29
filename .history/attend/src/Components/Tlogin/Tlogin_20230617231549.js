import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNavbar from "../StudentSection/SideNavbar";
const Tlogin = (props) => {
  // To open and close the sidebar
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const currUser = props.userData;

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

  return (
    <div className="bg-gray-600 h-screen">
      <h3 className="text-3xl font-extrabold text-gray-300 mb-6 ml-10 text-center ">
        Welcome Prof. {currUser.name}
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
              <div className="block p-6 rounded-lg shadow-lg bg-gray-200 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4 ">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label text-black text-2xl font-extrabold inline-block "
                  >
                    CREATE NEW STUDENT
                  </label>
                </div>
                <p className="text-gray-900 font-semibold mb-2 ">
                  Register New Students for their respective subjects and
                  branches
                </p>
                <Link to="/createattend">
                  <button
                    type="button"
                    className="inline-block px-4 py-1.5 text-extrabold bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
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
              <div className="block p-6 rounded-lg shadow-lg bg-gray-200 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4 ">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label text-black text-2xl font-extrabold inline-block "
                  >
                    UPDATE STUDENT DETAILS
                  </label>
                </div>
                <p className="text-gray-900 font-semibold mb-2 ">
                  Update the existing students enrolled in thier respective
                  courses
                </p>
                <Link to="/selectstud">
                  <button
                    type="button"
                    className="inline-block px-4 py-1.5 text-extrabold bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="md:flex flex-start">
              <div className="block p-6 rounded-lg shadow-lg bg-gray-200 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4 ">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label text-black text-2xl font-extrabold inline-block "
                  >
                    TAKE ATTENDANCE
                  </label>
                </div>
                <p className="text-gray-900 font-semibold mb-2 ">
                  Looorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper
                </p>
                <Link to="/takeattend">
                  <button
                    type="button"
                    className="inline-block px-4 py-1.5 text-extrabold bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                  >
                    Take
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tlogin;
