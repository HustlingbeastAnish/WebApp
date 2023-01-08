import React, { useState } from "react";
import SideNavbar from "../StudentSection/SideNavbar";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
function Slogin() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="text-center text-3xl">
        <h2 className="font-semibold">Welcome Student....</h2>
      </div>
      <button
        // className={`${open && "rotate-180"}`}
        style={{ width: "40px", height: "28px", margin: "8px" }}
        onClick={(e) => {
          setOpen(!open);
        }}
      >
        <div
          class={`relative w-10 h-10 overflow-hidden bg-gray-${!pen?} rounded-full dark:bg-gray-600`}
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
      <SideNavbar open={open} />
    </div>
  );
}

export default Slogin;
