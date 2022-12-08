import React from "react";

function navbar() {
  return (
    <nav className="bg-gray-600 ">
      <ul className="flex">
        <li className="text-white p-6 m-2">Home</li>
        <li>Students</li>
        <li>Teachers</li>
      </ul>
    </nav>
  );
}

export default navbar;
