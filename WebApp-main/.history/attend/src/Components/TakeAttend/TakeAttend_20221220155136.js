import React from "react";

const TakeAttend = () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        // style={{ backgroundImage:  }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Teachers Only
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            Please select the subjects from the dropdown
          </div>

          <button
            id="dropdownUsersButton"
            data-dropdown-toggle="dropdownUsers"
            data-dropdown-placement="bottom"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Project users{" "}
            <svg
              className="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdownUsers"
            className="hidden z-10 w-60 bg-white rounded shadow dark:bg-gray-700"
          >
            <ul
              className="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUsersButton"
            >
              <li>
                <a
                  href="/#"
                  className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {/* <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese image"
                  /> */}
                  Jese Leos
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {/* <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="/docs/images/people/profile-picture-2.jpg"
                    alt="Jese image"
                  /> */}
                  Robert Gough
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {/* <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Jese image"
                  /> */}
                  Bonnie Green
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {/* <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="/docs/images/people/profile-picture-4.jpg"
                    alt="Jese image"
                  /> */}
                  Leslie Livingston
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {/* <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="/docs/images/people/profile-picture-5.jpg"
                    alt="Jese image"
                  /> */}
                  Michael Gough
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {/* <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="/docs/images/people/profile-picture-2.jpg"
                    alt="Jese image"
                  /> */}
                  Joseph Mcfall
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {/* <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Jese image"
                  /> */}
                  Roberta Casas
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {/* <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese image"
                  /> */}
                  Neil Sims
                </a>
              </li>
            </ul>
            <a
              href="/#"
              className="flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline"
            >
              <svg
                className="mr-1 w-5 h-5"
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
        </div>
      </div>
    </div>
  );
};

export default TakeAttend;
