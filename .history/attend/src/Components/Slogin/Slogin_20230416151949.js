import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNavbar from "../StudentSection/SideNavbar";
import Card from "../JobPortal/JobCard";
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
        <Card link={checkattend} />
      </div>
    </div>
  );
}
export default Slogin;
