import React, { useState, useEffect } from "react";
import "flowbite";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function MarkAttend(props) {
  const navigate = useNavigate();

  const currSubject = props.Subject;
  const currBranch = props.Branch;

  const currSubjArr = currSubject.replaceAll(" ", "_");
  console.log(currSubjArr);
  const [studentData, setstudentData] = useState([]);

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const dayy = props.SelectedDate.getDate();
  const monthh = props.SelectedDate.getMonth();
  const yearr = props.SelectedDate.getFullYear();
  const datee = `${dayy}-${monthh}-${yearr}`;
  // console.log(props.SelectedDate);
  const [absentcount, Setabsentcount] = useState([
    
  ]);

  const [absent, Setabsent] = useState([
    ["", "0"],
    ["", "0"],
    ["", "0"],
    ["", "0"],
    ["", "0"],
    ["", "0"],
    ["", "0"],
    ["", "0"],
    ["", "0"],
    ["", "0"],
  ]);
  const PostAbs = async (e) => {
    
    for (let i = 0; i < 10; i++) {
      if (absent[i][1] === "0") {
        continue;
      } else {
        const res = await fetch("/api/absentstud", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: absent[i][0],
            subjectName: currSubjArr,
            datee: datee,
          }),
        });
        const data = await res.json();
        console.log(data);
        if (!data || data.status === 422 || data.error) {
          Swal.fire({
            title: 'Failure',
            text: 'Attendance Not Posted ',
            icon: 'error',
            confirmButtonText: 'Retry'
          })
          console.log("Student has been marked absent");
        } else {
          Swal.fire({
            title: 'Attendance Posted Sucessfully',
            icon: 'success',
            timer: 1000,
          })
          setTimeout(() => {
            navigate("/tlogin");
          }, 1500);
       
        
          console.log("Student has not been marked absent");
        }
      }
    }
    Swal.fire({
      title: 'Attendance Posted Sucessfully',
      icon: 'success',
      timer: 1000,
    })
    setTimeout(() => {
      navigate("/tlogin");
    }, 1500);
  };
  const [flag, setflag] = useState(false);

  const fetchStudentDetails = () => {
    axios
      .get(`http://localhost:3002/api/studdata/${currSubjArr}/${currBranch}`)
      .then((res) => {
        console.log(res.data);
        const temp = res.data;
        setstudentData(temp);
        console.log("Tay Keith F these niggas up");
        axios
          .get(
            `http://localhost:3002/api/classesddata/${currSubject}/${currBranch}`
          )
          .then((res) => {
            const tempp = currSubject + "_" + currBranch;
            settotalnoofclasses(res.data[0][tempp].length);
            const totclass = res.data[0][tempp].length;

            temp.map((elem, idx) => {
              console.log(props.Subject + "dubiu");
              console.log(elem.email);
              axios
                .get(`http://localhost:3002/detailstloginusers/${elem.email}`)
                .then((res) => {
                  console.log(res.data[props.Subject]);

                  Setabsentcount((absentcount) => ({
                    ...absentcount,
                    [idx]: (
                      ((totclass - res.data[props.Subject].length) / totclass) *
                      100
                    ).toFixed(2),
                  }));
                  setTimeout(() => {
                    setflag(true);
                  }, 0);
                })
                .catch((err) => {
                  console.log("attendance calculation not possible ");
                  console.log(err);
                });
            });
          })
          .catch((err) => {
            console.log(err);
            console.log("Data not fetched");
          });
      })

      .catch((err) => {
        console.log(err);
        console.log("Data not fetched");
      });
  };

  const [totalnoofclasses, settotalnoofclasses] = useState(10);

  const FetchChangedChangedAttendanceDetails = (elem, idx) => {
    console.log(props.Subject + "dubiu");
    axios
      .get(`http://localhost:3002/detailstloginusers/${elem.email}`)
      .then((res) => {
        console.log(res.data[props.Subject]);
        // console.log(props.Subject+"dubiu");
        //console.log(res.data.Data_Structures);
        if (absent[idx][1] === "1") {
          if (absent[idx][1] === "1") {
            Setabsentcount((absentcount) => ({
              ...absentcount,
              [idx]: (
                ((totalnoofclasses - res.data[props.Subject].length) /
                  totalnoofclasses) *
                100
              ).toFixed(2),
            }));
          } else {
            Setabsentcount((absentcount) => ({
              ...absentcount,
              [idx]: (
                ((totalnoofclasses - res.data[props.Subject].length - 1) /
                  totalnoofclasses) *
                100
              ).toFixed(2),
            }));
          }
        } else {
          Setabsentcount((absentcount) => ({
            ...absentcount,
            [idx]: (
              ((totalnoofclasses - res.data[props.Subject].length - 1) /
                totalnoofclasses) *
              100
            ).toFixed(2),
          }));
        }
      })
      .catch((err) => {
        console.log("attendance calculation not possible ");
        console.log(err);
      });
  };

  const HandleAbsentees = (elem, idx) => {
    Setabsent((absent) => ({
      ...absent,
      [idx]: [elem.email, absent[idx][1] === "1" ? "0" : "1"],
    }));
  };
  return (
    <>
      <div className="bg-gray-700 border-black flex flex-col items-center">
        <h2 className="text-center font-semibold text-3xl mt-2 text-white">
          Showing Details for {`${dayy}/${monthh}/${yearr}`}
        </h2>

        {!flag && <Spinner />}
        {flag && (
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
                        zz
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
              <tr class="even:bg-grey">
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
                              HandleAbsentees(elem, idx);
                              FetchChangedChangedAttendanceDetails(elem, idx);
                            }}
                          />
                          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {absent[idx][1] === "1" ? "Absent" : "Present"}
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
        )}

        {flag && (
          <button
            type="button"
            onClick={PostAbs}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5 mb-5"
          >
            Post Attendance
          </button>
        )}
      </div>
    </>
  );
}

export default MarkAttend;
