import React from "react";

const TakeAttend = () => {
  return (
    <>
      <button
        id="dropdownUsersButton"
        data-dropdown-toggle="dropdownUsers"
        data-dropdown-placement="bottom"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Project users{" "}
        <svg
          class="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            strokeLinejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdownUsers"
        class="hidden z-10 w-60 bg-white rounded shadow dark:bg-gray-700"
      >
        <ul
          class="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownUsersButton"
        >
          <li>
            <a
              href="/#"
              class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Jese image"
              />
              Jese Leos
            </a>
          </li>
          <li>
            <a
              href="/#"
              class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="/docs/images/people/profile-picture-2.jpg"
                alt="Jese image"
              />
              Robert Gough
            </a>
          </li>
          <li>
            <a
              href="/#"
              class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Jese image"
              />
              Bonnie Green
            </a>
          </li>
          <li>
            <a
              href="/#"
              class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="/docs/images/people/profile-picture-4.jpg"
                alt="Jese image"
              />
              Leslie Livingston
            </a>
          </li>
          <li>
            <a
              href="/#"
              class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="Jese image"
              />
              Michael Gough
            </a>
          </li>
          <li>
            <a
              href="/#"
              class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="/docs/images/people/profile-picture-2.jpg"
                alt="Jese image"
              />
              Joseph Mcfall
            </a>
          </li>
          <li>
            <a
              href="/#"
              class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Jese image"
              />
              Roberta Casas
            </a>
          </li>
          <li>
            <a
              href="/#"
              class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Jese image"
              />
              Neil Sims
            </a>
          </li>
        </ul>
        <a
          href="/#"
          class="flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline"
        >
          <svg
            class="mr-1 w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
          </svg>
          Add new user
        </a>
      </div>
    </>
  );
};

export default TakeAttend;
