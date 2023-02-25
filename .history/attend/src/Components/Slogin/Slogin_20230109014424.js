import React, { useState } from "react";
import SideNavbar from "../StudentSection/SideNavbar";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
function Slogin() {
  var open = false;

  return (
    <div>
      <div>
        <h2 className="font-semibold">Welcome Student....</h2>
      </div>
      <BsFillArrowRightCircleFill
        onClick={(e) => {
          open = !open;
        }}
      />
      <SideNavbar open={open} />
    </div>
  );
}

export default Slogin;
