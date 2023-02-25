import React from "react";

function UpdateStud() {
  return (
    <div ckassName="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div ckassName="flex justify-between items-center py-4 bg-white dark:bg-gray-800">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            ckassName="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span ckassName="sr-only">Action button</span>
            Action
            <svg
              ckassName="ml-2 w-3 h-3"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdownAction"
            ckassName="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              ckassName="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownActionButton"
            >
              <li>
                <a
                  href="/abs"
                  ckassName="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Reward
                </a>
              </li>
              <li>
                <a
                  href="/abs"
                  ckassName="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Promote
                </a>
              </li>
              <li>
                <a
                  href="/abs"
                  ckassName="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Activate account
                </a>
              </li>
            </ul>
            <div ckassName="py-1">
              <a
                href="/abs"
                ckassName="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete User
              </a>
            </div>
          </div>
        </div>
        <label for="table-search" ckassName="sr-only">
          Search
        </label>
        <div ckassName="relative">
          <div ckassName="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              ckassName="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            ckassName="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
      <table ckassName="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead ckassName="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" ckassName="p-4">
              <div ckassName="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  ckassName="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" ckassName="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" ckassName="py-3 px-6">
              Name
            </th>
            <th scope="col" ckassName="py-3 px-6">
              Position
            </th>
            <th scope="col" ckassName="py-3 px-6">
              Status
            </th>
            <th scope="col" ckassName="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr ckassName="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td ckassName="p-4 w-4">
              <div ckassName="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  ckassName="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" ckassName="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              ckassName="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                ckassName="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Jese image"
              />
              <div ckassName="pl-3">
                <div ckassName="text-base font-semibold">Neil Sims</div>
                <div ckassName="font-normal text-gray-500">
                  neil.sims@flowbite.com
                </div>
              </div>
            </th>
            <td ckassName="py-4 px-6">React Developer</td>
            <td ckassName="py-4 px-6">
              <div ckassName="flex items-center">
                <div ckassName="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                Online
              </div>
            </td>
            <td ckassName="py-4 px-6">
              <a
                href="/abs"
                type="button"
                data-modal-toggle="editUserModal"
                ckassName="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit user
              </a>
            </td>
          </tr>
          <tr ckassName="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td ckassName="p-4 w-4">
              <div ckassName="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  ckassName="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" ckassName="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              ckassName="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                ckassName="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Jese image"
              />
              <div ckassName="pl-3">
                <div ckassName="text-base font-semibold">Bonnie Green</div>
                <div ckassName="font-normal text-gray-500">
                  bonnie@flowbite.com
                </div>
              </div>
            </th>
            <td ckassName="py-4 px-6">Designer</td>
            <td ckassName="py-4 px-6">
              <div ckassName="flex items-center">
                <div ckassName="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                Online
              </div>
            </td>
            <td ckassName="py-4 px-6">
              <a
                href="/abs"
                type="button"
                data-modal-toggle="editUserModal"
                ckassName="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit user
              </a>
            </td>
          </tr>
          <tr ckassName="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td ckassName="p-4 w-4">
              <div ckassName="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  ckassName="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" ckassName="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              ckassName="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                ckassName="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-2.jpg"
                alt="Jese image"
              />
              <div ckassName="pl-3">
                <div ckassName="text-base font-semibold">Jese Leos</div>
                <div ckassName="font-normal text-gray-500">
                  jese@flowbite.com
                </div>
              </div>
            </th>
            <td ckassName="py-4 px-6">Vue JS Developer</td>
            <td ckassName="py-4 px-6">
              <div ckassName="flex items-center">
                <div ckassName="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                Online
              </div>
            </td>
            <td ckassName="py-4 px-6">
              <a
                href="/abs"
                type="button"
                data-modal-toggle="editUserModal"
                ckassName="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit user
              </a>
            </td>
          </tr>
          <tr ckassName="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td ckassName="p-4 w-4">
              <div ckassName="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  ckassName="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" ckassName="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              ckassName="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                ckassName="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="Jese image"
              />
              <div ckassName="pl-3">
                <div ckassName="text-base font-semibold">Thomas Lean</div>
                <div ckassName="font-normal text-gray-500">
                  thomes@flowbite.com
                </div>
              </div>
            </th>
            <td ckassName="py-4 px-6">UI/UX Engineer</td>
            <td ckassName="py-4 px-6">
              <div ckassName="flex items-center">
                <div ckassName="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                Online
              </div>
            </td>
            <td ckassName="py-4 px-6">
              <a
                href="/abs"
                type="button"
                data-modal-toggle="editUserModal"
                ckassName="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit user
              </a>
            </td>
          </tr>
          <tr ckassName="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td ckassName="p-4 w-4">
              <div ckassName="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  ckassName="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-3" ckassName="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              ckassName="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                ckassName="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-4.jpg"
                alt="Jese image"
              />
              <div ckassName="pl-3">
                <div ckassName="text-base font-semibold">Leslie Livingston</div>
                <div ckassName="font-normal text-gray-500">
                  leslie@flowbite.com
                </div>
              </div>
            </th>
            <td ckassName="py-4 px-6">SEO Specialist</td>
            <td ckassName="py-4 px-6">
              <div ckassName="flex items-center">
                <div ckassName="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                Offline
              </div>
            </td>
            <td ckassName="py-4 px-6">
              <a
                href="/abs"
                type="button"
                data-modal-toggle="editUserModal"
                ckassName="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit user
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        id="editUserModal"
        tabindex="-1"
        aria-hidden="true"
        ckassName="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full"
      >
        <div ckassName="relative w-full max-w-2xl h-full md:h-auto">
          <form
            action="#"
            ckassName="relative bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <div ckassName="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 ckassName="text-xl font-semibold text-gray-900 dark:text-white">
                Edit user
              </h3>
              <button
                type="button"
                ckassName="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="editUserModal"
              >
                <svg
                  ckassName="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div ckassName="p-6 space-y-6">
              <div ckassName="grid grid-cols-6 gap-6">
                <div ckassName="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    ckassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    ckassName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bonnie"
                    required=""
                  />
                </div>
                <div ckassName="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    ckassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    ckassName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Green"
                    required=""
                  />
                </div>
                <div ckassName="col-span-6 sm:col-span-3">
                  <label
                    for="email"
                    ckassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    ckassName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@company.com"
                    required=""
                  />
                </div>
                <div ckassName="col-span-6 sm:col-span-3">
                  <label
                    for="phone-number"
                    ckassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    ckassName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g. +(12)3456 789"
                    required=""
                  />
                </div>
                <div ckassName="col-span-6 sm:col-span-3">
                  <label
                    for="department"
                    ckassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    ckassName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Development"
                    required=""
                  />
                </div>
                <div ckassName="col-span-6 sm:col-span-3">
                  <label
                    for="company"
                    ckassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company
                  </label>
                  <input
                    type="number"
                    name="company"
                    id="company"
                    ckassName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123456"
                    required=""
                  />
                </div>
                <div ckassName="col-span-6 sm:col-span-3">
                  <label
                    for="current-password"
                    ckassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="current-password"
                    id="current-password"
                    ckassName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
                <div ckassName="col-span-6 sm:col-span-3">
                  <label
                    for="new-password"
                    ckassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="new-password"
                    id="new-password"
                    ckassName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div ckassName="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                type="submit"
                ckassName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateStud;
