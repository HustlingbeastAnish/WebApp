import React from "react";

function navbar() {
  return (
    // <nav className="bg-gray-900 flex">
    //   <h2 className="text-white m-2 p-4 text-2xl font-semibold">
    //     TracKnAttend
    //   </h2>
    //   <ul className="flex ml-96">
    //     <li className="text-white p-6 m-2 text-xl font-semibold hover:text-red-600 hover:scale-110">
    //       Home
    //     </li>
    //     <li className="text-white p-6 m-2 text-xl font-semibold hover:text-red-600 hover:scale-110">
    //       Students
    //     </li>
    //     <li className="text-white p-6 m-2 text-xl font-semibold hover:text-red-600 hover:scale-110">
    //       Teachers
    //     </li>
    //   </ul>

    //   <div class="flex space-x-2 justify-center">
    //     <button
    //       type="button"
    //       class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out h-10 mt-7 ml-96"
    //     >
    //       Button
    //     </button>
    //   </div>
    // </nav>
    <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center ">
        <span class="text-2xl font-[Poppins] cursor-pointer">
          <h2>TracKnAlert</h2>
        </span>

        <span class="text-3xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>
      </div>

      <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li class="mx-4 my-6 md:my-0">
          <a href="/#" class="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="/#" class="text-xl hover:text-cyan-500 duration-500">
            SERVICE
          </a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="/#" class="text-xl hover:text-cyan-500 duration-500">
            ABOUT
          </a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="/#" class="text-xl hover:text-cyan-500 duration-500">
            CONTACT
          </a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="/#" class="text-xl hover:text-cyan-500 duration-500">
            BLOG'S
          </a>
        </li>

        <button class="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">
          Get started
        </button>
      </ul>
    </nav>
  );
}

export default navbar;
