import React, { useContext, useState, useEffect } from "react";
import "flowbite";
import axios from "axios";
import { useFetcher } from "react-router-dom";
// import { TeacherQueries } from "../TakeAttend/TakeAttend";
function MarkAttend(props) {
  //   const value = useContext(TeacherQueries);

  const currSubject = props.Subject;
  const currBranch = props.Branch;

  const [studentData, setstudentData] = useState([{}]);
  useEffect(() => {
    // console.log(currSubject);
    fetchStudentDetails();
  }, []);

  const fetchStudentDetails = () => {
    axios
      .get(`http://localhost:3002/api/studdata/${currSubject}`)
      .then((res) => {
        setstudentData(res.data);
        console.log(res.data);
        console.log(studentData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="bg-gray-400 border-black">
        <h2 className="text-center font-semibold font-siez ">Welcome XYZ ..</h2>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <div className="flex justify-between items-center py-4 bg-white dark:bg-gray-800">
            <div>
              <button
                id="dropdownActionButton"
                data-dropdown-toggle="dropdownAction"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <span className="sr-only">Action button</span>
                Action
                <svg
                  className="ml-2 w-3 h-3"
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
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownAction"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownActionButton"
                >
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Reward
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Promote
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Activate account
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="/#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete User
                  </a>
                </div>
              </div>
            </div>
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for users"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="py-3 px-6">
                  Student Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Subject
                </th>
                <th scope="col" className="py-3 px-6">
                  Branch
                </th>
                <th scope="col" className="py-3 px-6">
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((elem) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {elem.name}
                        </div>
                        <div className="font-normal text-gray-500">
                          {elem.email}
                        </div>
                      </div>
                    </th>
                    <td className="py-4 px-6">{elem.subject}</td>
                    <td className="py-4 px-6">{elem.branch}</td>
                    <div>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-all-search"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <div class="flex items-center mr-4">
                            <input
                              checked
                              id="checkbox-all-search"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="red-checkbox"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Red
                            </label>
                          </div>
                        </div>
                      </th>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* </TeacherQueries.Consumer> */}
    </>
  );
}

export default MarkAttend;
