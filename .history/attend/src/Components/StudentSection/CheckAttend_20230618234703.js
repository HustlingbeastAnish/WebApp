import React from "react";
import { useEffect } from "react";
import useState from "react-usestateref";
import { useNavigate } from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { studentData } from "./data";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const CheckSub = (props) => {
  const currBranch = "CSE";

  // Props drilling of UserData
  const userData = props.AuthorizedStud;

  const [StudSubjects, SetStudentSubjects, StudSubjectsRef] = useState([
    "DSA",
    "DEV",
  ]);
  const [
    TotalClassesPerSubject,
    setTotalClassesPerSubject,
    TotalClassesPerSubjectRef,
  ] = useState([]);
  const [
    TotalAttendancePerSubject,
    setTotalAttendancePerSubject,
    TotalAttendancePerSubjectRef,
  ] = useState([]);

  const [studData, setstudData, studDataRef] = useState({
    labels: studentData.map((data) => data.subject),
    datasets: [
      {
        label: "Attendance Percentage",
        data: studentData.map((data) => data.attendance),
        backgroundColor: ["violet", "blue", "green", "red", "gray"],
      },
    ],
  });

  const [flag, setflag] = useState(false);
  const [flagBar, setflagBar] = useState(false);
  const [flagLine, setflagLine] = useState(false);

  const getSubjects = () => {
    axios
      .get(`http://localhost:8080/checksubjects/${userData.email}`)
      .then((res) => {
        const vari = res.data.subject;

        // Resizing the array as soon as we get the size of the subjects
        const totalClasses = Array(vari.length + 1).fill(0);
        const totalAttendance = Array(vari.length + 1).fill(0);
        SetStudentSubjects(vari);
        console.log(StudSubjectsRef.current);
        for (let i = 0; i < StudSubjectsRef.current.length; i++) {
          const currSubject = StudSubjectsRef.current[i];
          const temp = currSubject + "_" + currBranch;
          axios
            .get(
              `http://localhost:8080/api/classesddata/${StudSubjectsRef.current[i]}/${currBranch}`
            )
            .then((res) => {
              setTotalClassesPerSubject((TotalClassesPerSubject) => ({
                ...TotalClassesPerSubject,
                [i]: res.data[0][temp].length,
              }));
              axios
                .get(
                  `http://localhost:8080/detailstloginusers/${userData.email}`
                )
                .then((res) => {
                  setTotalAttendancePerSubject((TotalAttendancePerSubject) => ({
                    ...TotalAttendancePerSubject,
                    [i]: (
                      ((TotalClassesPerSubjectRef.current[i] -
                        res.data[StudSubjectsRef.current[i]].length) /
                        TotalClassesPerSubjectRef.current[i]) *
                      100
                    ).toFixed(2),
                  }));
                  console.log("Attendance As");
                  console.log(TotalAttendancePerSubjectRef.current[i]);
                  setstudData({
                    labels: StudSubjectsRef.current,
                    datasets: [
                      {
                        label: "Attendance Percentage",
                        data: Object.keys(
                          TotalAttendancePerSubjectRef.current
                        ).map(
                          (key) => TotalAttendancePerSubjectRef.current[key]
                        ),
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                          "rgba(255, 205, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(201, 203, 207, 0.2)",
                        ],
                        borderColor: [
                          "rgb(255, 99, 132)",
                          "rgb(255, 159, 64)",
                          "rgb(255, 205, 86)",
                          "rgb(75, 192, 192)",
                          "rgb(54, 162, 235)",
                          "rgb(153, 102, 255)",
                          "rgb(201, 203, 207)",
                        ],
                        borderWidth: 4,
                      },
                    ],
                  });
                  setTimeout(() => {
                    setflag(true);
                  }, 1000);
                })
                .catch((err) => {
                  console.log("attendance calculation not possible ");
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
              console.log("Data not fetched");
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSubjects();
  }, []);
  return (
    <div className="h-screen bg-gray-900">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <div className="m-2 text-4xl font-semibold text-white">
            Welcome {userData.name} to DashBoard
          </div>
        </div>
      </div>
      {!flag && <Spinner />}
      {flag && (
        <div className="m-2 flex flex-col">
          <div class="flex justify-center">
            <table class="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-white-100 uppercase bg-gray- dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3 text-2xl font-bold">
                    Sl No.
                  </th>
                  <th scope="col" class="px-6 py-3 text-2xl font-bold">
                    Subjects
                  </th>
                  <th scope="col" class="px-6 py-3 text-2xl font-bold">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3 text-2xl font-bold">
                    Attendance
                  </th>
                  <th scope="col" class="px-6 py-3 text-2xl font-bold">
                    Subject Code
                  </th>
                </tr>
              </thead>
              {StudSubjects.map((elem, idx) => {
                return (
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {idx}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {elem}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Enrolled
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {TotalAttendancePerSubjectRef.current[idx]}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        CS237A
                      </th>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div class="flex justify-center">
            <div class="flex justify-center">
              <div class="rounded-md shadow-sm bg-white" role="group">
                <button
                  type="button"
                  onClick={(e) => {
                    setflag(!flag);
                    setflagLine(false);
                    setflagBar(false);
                  }}
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <svg
                    fill="#000000"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 mr-2"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M17 1h-2a1 1 0 0 0-1 1v16.992h4V2a1 1 0 0 0-1-1zm-6 6H9a1 1 0 0 0-1 1v10.992h4V8a1 1 0 0 0-1-1zm-6 6H3a1 1 0 0 0-1 1v4.992h4V14a1 1 0 0 0-1-1z"></path>
                    </g>
                  </svg>
                  Bar Graph
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    setflagBar(!flagBar);
                  }}
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 mr-2"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M6.5 0H6V9H15V8.5C15 3.80558 11.1944 0 6.5 0Z"
                        fill="#000000"
                      ></path>
                      <path
                        d="M12.8261 10H5V2.17393C2.1333 2.8511 0 5.42642 0 8.5C0 12.0899 2.91015 15 6.5 15C9.57358 15 12.1489 12.8667 12.8261 10Z"
                        fill="#000000"
                      ></path>
                    </g>
                  </svg>
                  Pie Graph
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    setflagLine(!flagLine);
                  }}
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 mr-2"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M3 16.5L9 10L13 16L21 6.5"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  Line Graph
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {flag && (
        <div className="flex justify-center items-center">
          <div
            style={{
              width: 700,
              height: 500,
            }}
          >
            <div className="mt-10 mb-2">
              <Bar
                data={studDataRef.current}
                options={{
                  plugins: {
                    legend: {
                      labels: {
                        font: {
                          size: 20,
                        },
                      },
                    },
                  },
                }}
              />
            </div>
            {flagLine && !flag && !flagLine && (
              <div className="mt-10 mb-10">
                <Line
                  data={studDataRef.current}
                  options={{
                    plugins: {
                      legend: {
                        labels: {
                          font: {
                            size: 20,
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            )}
            {!flagBar && !flag && flagLine && (
              <div className="mt-15 mb-5">
                <Pie
                  data={studDataRef.current}
                  options={{
                    plugins: {
                      legend: {
                        labels: {
                          font: {
                            size: 20,
                          },
                        },
                      },
                    },
                    aspectRatio: 1.5,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckSub;
