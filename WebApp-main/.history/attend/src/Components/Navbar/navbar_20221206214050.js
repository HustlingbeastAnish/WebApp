import React from "react";

function navbar() {
  return (
    <nav className="bg-gray-600 flex">
      <h2 className="text-white m-2 p-4 text-2xl font-semibold">
        TracKnAttend
      </h2>
      <ul className="flex ml-24">
        <li className="text-white p-6 m-2 text-xl font-semibold hover:text-red-600 hover:scale-110">
          Home
        </li>
        <li className="text-white p-6 m-2 text-xl font-semibold hover:text-red-600 hover:scale-110">
          Students
        </li>
        <li className="text-white p-6 m-2 text-xl font-semibold hover:text-red-600 hover:scale-110">
          Teachers
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
