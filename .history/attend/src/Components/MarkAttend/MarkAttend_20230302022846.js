import React, { useState, useEffect } from "react";
import "flowbite";
import axios from "axios";

function MarkAttend(props) {
  const currSubject = props.Subject;
  const currBranch = props.Branch;

  const currSubjArr = currSubject.replaceAll(" ", "_");
  console.log(currSubjArr);

  const [studentData, setstudentData] = useState([{}]);
  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const [arr, setarr] = useState({});
  const dayy = props.SelectedDate.getDate();
  const monthh = props.SelectedDate.getMonth();
  const yearr = props.SelectedDate.getFullYear();
  console.log(yearr);
  // yearr = yearr.slice(1);
  const datee = `${dayy}-${monthh}-${yearr}`;
  console.log(datee);
  const [currStudEmail, setcurrStudEmail] = useState("");
  const [currStudSubj, setcurrStudSubj] = useState("");

  const [absentcount, Setabsentcount] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0,
  ]);

  const [absent, Setabsent] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ]);
  const PostAbs = async (e) => {
    console.log(currStudEmail);
    console.log(currBranch);
    console.log(currSubjArr);
    console.log(datee);

    const res = await fetch("/api/absentstud", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: currStudEmail,
        subjectName: currSubjArr,
        datee: datee,
      }),
    });
    const data = await res.json();
    if (!data || data.status === 422 || data.error) {
      console.log("Student has been marked absent");
    } else {
      console.log("Student has not been marked absent");
    }
  };

  const fetchStudentDetails = () => {
    axios
      .get(`http://localhost:3002/api/studdata/${currSubjArr}/${currBranch}`)
      .then((res) => {
        setstudentData(res.data);
        console.log(res.data);
        console.log(studentData);
      })
      .catch((err) => {
        console.log(err);
        console.log("Data not fetched");
      });
  };

  const FetchAttendanceDetails = (elem, idx) => {
    axios
      .get(`http://localhost:3002/detailstloginusers/${elem.email}`)
      .then((res) => {
        console.log(res.data.Data_Structures.length);
        Setabsentcount((absentcount) => ({
          ...absentcount,
          [idx]: (((31 - res.data.Data_Structures.length) / 31) * 100).toFixed(
            2
          ),
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HandleAbsentees = (idx) => {
    Setabsent((absent)=>({
      ...absent,[idx]:1-absent[idx];
    }))
  };
  return (
    <>
      <div className="bg-gray-700 border-black flex flex-col items-center">
        <h2 className="text-center font-semibold text-3xl mt-2 text-white">
          Showing Details for {`${dayy}/${monthh}/${yearr}`}
        </h2>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-4/5 mt-10">
          <div className="flex justify-between items-center py-4 bg-white dark:bg-gray-800 ">
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
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  Attendance
                </th>
                <th scope="col" className="py-3 px-6 text-xs text-white">
                  Percentage
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
                    <td className="py-4 px-6">{elem.roll}</td>
                    <td className="py-4 px-6">{currSubject}</td>
                    <td className="py-4 px-6">{currBranch}</td>
                    <div>
                      <label class="relative inline-flex items-center mr-5 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          class="sr-only peer"
                          onClick={() => {
                            HandleAbsentees(idx);
                            FetchAttendanceDetails(elem, idx);
                          }}
                        />
                        <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          {arr[idx] === 1 ? "Absent" : "Present"}
                        </span>
                      </label>
                    </div>
                    <td className="py-4 px-6">{absentcount[idx]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MarkAttend;
