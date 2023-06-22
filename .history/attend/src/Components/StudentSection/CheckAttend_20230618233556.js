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
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 mr-2 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Profile
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 mr-2 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  Settings
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 mr-2 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Downloads
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
