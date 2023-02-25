import React, { useState } from "react";
import SideNavbar from "../StudentSection/SideNavbar";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
function Slogin() {
  const open = false;

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
      <SideNavbar open={open} close={close} />
    </div>
  );
}

export default Slogin;
