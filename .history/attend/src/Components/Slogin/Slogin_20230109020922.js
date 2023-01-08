import React, { useState } from "react";
import SideNavbar from "../StudentSection/SideNavbar";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
function Slogin() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <h2 className="font-semibold">Welcome Student....</h2>
      </div>
      <BsFillArrowRightCircleFill
        style={{ width: "" }}
        onClick={(e) => {
          setOpen(!open);
        }}
      />
      <SideNavbar open={open} />
    </div>
  );
}

export default Slogin;
