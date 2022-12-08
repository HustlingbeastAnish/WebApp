import React from "react";
import { Link } from "react-router-dom";
function teachstu() {
  return (
    <div class="h-screen flex">
      <div class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
        <form>
          <h1 class="text-white font-bold text-4xl font-sans">
            LOGIN AS A TEACHER
          </h1>

          <button
            type="submit"
            class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Login
          </button>
        </form>
      </div>
      <div class="flex w-1/2 justify-center items-center bg-white">
        <form class="bg-white">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">
            LOGIN AS A STUDENT
          </h1>

          <Link>
            <button
              type="submit"
              class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            >
          </Link>
        </form>
      </div>
    </div>
  );
}
export default teachstu;
