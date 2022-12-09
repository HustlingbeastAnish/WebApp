import React from "react";

function navbar() {
  return (
    <nav class="p-5 bg-gray-800 shadow md:flex md:items-center md:justify-between">
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
