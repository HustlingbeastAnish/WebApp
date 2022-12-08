import React from "react";

function navbar() {
  return (
    <nav className="bg-gray-900 flex">
      <h2 className="text-white m-2 p-4 text-2xl font-semibold">
        TracKnAttend
      </h2>
      <ul className="flex ml-96">
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

      <div class="flex space-x-2 justify-center">
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out h-10 mt-7 ml-96"
        >
          Button
        </button>
      </div>
    </nav>
  );
}

export default navbar;
