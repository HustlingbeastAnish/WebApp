import React from "react";

function navbar() {
  return (
    <nav className="bg-gray-600 flex">
      <h2 className="text-white m-4 p-5 text-2xl">TracKnAttend</h2>
      <ul className="flex">
        <li className="text-white p-6 m-2">Home</li>
        <li className="text-white p-6 m-2">Students</li>
        <li className="text-white p-6 m-2">Teachers</li>
      </ul>
    </nav>
  );
}

export default navbar;
