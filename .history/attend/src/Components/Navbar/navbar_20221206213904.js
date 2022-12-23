import React from "react";

function navbar() {
  return (
    <nav className="bg-gray-600 flex">
      <h2 className="text-white m-4 p-5 text-2xl font-semibold">
        TracKnAttend
      </h2>
      <ul className="flex">
        <li className="text-white p-6 m-2 text-xl font-semibold">Home</li>
        <li className="text-white p-6 m-2 text-xl font-semibold">Students</li>
        <li className="text-white p-6 m-2 text-xl font-semibold">Teachers</li>
      </ul>
    </nav>
  );
}

export default navbar;
