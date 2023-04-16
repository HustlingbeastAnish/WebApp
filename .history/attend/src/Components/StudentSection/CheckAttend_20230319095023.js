import React from "react";
import { useEffect } from "react";
import useState from "react-usestateref";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { studentData } from "./data";
import axios from "axios";

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
  ] = useState([0, 0, 0]);
  const [
    TotalAttendancePerSubject,
    setTotalAttendancePerSubject,
    TotalAttendancePerSubjectRef,
  ] = useState([0, 0, 0]);
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

  // Array Storing all the subjects in which he is enrolled
  const [flag, setflag] = useState(true);
  const [flag2, setflag2] = useState(true);

  const getSubjects = () => {
    axios
      .get(`http://localhost:3002/checksubjects/${userData.email}`)
      .then((res) => {
        const vari = res.data.subject;
        SetStudentSubjects(vari);
        console.log(StudSubjectsRef.current);
        for (let i = 0; i < StudSubjectsRef.current.length; i++) {
          const currSubject = StudSubjectsRef.current[i];
          const temp = currSubject + "_" + currBranch;
          axios
            .get(
              `http://localhost:3002/api/classesddata/${StudSubjectsRef.current[i]}/${currBranch}`
            )
            .then((res) => {
              setTotalClassesPerSubject((TotalClassesPerSubject) => ({
                ...TotalClassesPerSubject,
                [i]: res.data[0][temp].length,
              }));
              // FetchAttendanceDetails(StudSubjects[i], i);
              axios
                .get(
                  `http://localhost:3002/detailstloginusers/${userData.email}`
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
                          "violet",
                          "blue",
                          "green",
                          "red",
                          "gray",
                        ],
                      },
                    ],
                  });
                  setflag2(true);
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
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <div className="m-2 text-4xl font-semibold">
            Welcome {userData.name} to DashBoard
          </div>
        </div>
      </div>
      {flag && (
        <div className="m-2">
          <div class="flex justify-center">
            <table class="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-white-100 uppercase bg-gray- dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3 text-2xl font-bold">
                    Subjects
                  </th>
                  <th scope="col" class="px-6 py-3 text-2xl font-bold">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3 text-2xl font-bold">
                    Attendance
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
                        {elem}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Enrolled
                      </th>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      )}

      {flag2 && (
        <div className="flex justify-center items-center">
          <div
            style={{
              width: 700,
              height: 500,
            }}
          >
            <Bar
              data={studData}
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
        </div>
      )}
    </div>
  );
};

export default CheckSub;
