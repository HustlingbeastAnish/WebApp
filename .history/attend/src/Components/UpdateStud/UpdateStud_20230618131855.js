import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

function Updatestud(props) {
  const navigate = useNavigate();
  const currSubject = props.Subject;
  const currBranch = props.Branch;

  const currSubjArr = currSubject.replaceAll(" ", "_");
  console.log(currSubjArr);

  const [studentData, setstudentData] = useState([{}]);
  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const Slide = () => {
    console.log(props.Upstud);
    navigate("/editstud");
  };

  const [flag, setflag] = useState(false);
  const fetchStudentDetails = () => {
    axios
      .get(`http://localhost:8080/api/studdata/${currSubjArr}/${currBranch}`)
      .then((res) => {
        setstudentData(res.data);
        console.log(res.data);

        setTimeout(() => {
          setflag(true);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        console.log("Data not fetched");
      });
  };
  return (
    <>
      <div>{!flag && <Spinner />}</div>
      {flag && (
        <div className="bg-gray-900 h-screen border-black mb-5 flex flex-col items-center">
          <h2 className="text-center font-semibold text-3xl mt-2 text-white">
            Showing Details
          </h2>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-4/5 mt-10">
            <div className="flex justify-between items-center py-4 bg-gray-600 dark:bg-gray-800 ">
              <div className="mx-96 w-96">
                <form class="flex items-center">
                  <label for="simple-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                      id="simple-search"
                      class="bg-gray-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                </form>
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6 text-white">
                    No.
                  </th>
                  <th scope="col" className="py-3 px-6 text-white">
                    Student Name
                  </th>
                  <th scope="col" className="py-3 px-6 text-white">
                    Roll Number
                  </th>
                  <th scope="col" className="py-3 px-6 text-white">
                    Subject
                  </th>
                  <th scope="col" className="py-3 px-6 text-white">
                    Branch
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs text-white">
                    Phone Number
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs text-white">
                    Edit User
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((elem, idx) => {
                  return (
                    <tr className="bg-gray-600 border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                      <td className="p-4 w-4">
                        <h1 className="text-center">{idx + 1}</h1>
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
                      <td className="py-4 px-6">{elem.roll}</td>
                      <td className="py-4 px-6">{currSubject}</td>
                      <td className="py-4 px-6">{currBranch}</td>
                      <td className="py-4 px-6">{elem.phone}</td>
                      <td className="py-4 px-6">
                        <button
                          type="button"
                          onClick={() => {
                            props.setUpstud(elem);
                            Slide();
                          }}
                          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Edit User
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Updatestud;
