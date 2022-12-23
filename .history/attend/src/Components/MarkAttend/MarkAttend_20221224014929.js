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
      <div className="bg-gray-400 border-black flex flex-col items-center">
        <h2 className="text-center font-semibold text-3xl mt-2">
          Showing Details for {props.currentDate}
        </h2>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-4/5 mt-10">
          <div className="flex justify-between items-center py-4 bg-white dark:bg-gray-800 ">
            <div className="relative">
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
                <th scope="col" className="py-3 px-6">
                  No.
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
                <th scope="col" className="py-3 px-6 text-xs">
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((elem, idx) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-4">
                      <h1>{idx + 1}</h1>
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
                        <div class="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-all-search"
                            className="sr-only"
                          >
                            Red
                          </label>
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
