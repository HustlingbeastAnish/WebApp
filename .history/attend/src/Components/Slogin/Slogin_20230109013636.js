import React,  useState from "react";
import SideNavbar from "../StudentSection/SideNavbar";

function Slogin() {
  const [open, close] = useState(false);
  return (
    <div>
      <div>
        <h2 className="font-semibold">Welcome Student....</h2>
      </div>
      <SideNavbar />
    </div>
  );
}

export default Slogin;
