import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { studentData } from "./data";
import axios from "axios";

const CheckSub = (props) => {
  const currBranch = "CSE";
  // console.log(currBranch);
  let [StudSubjects, SetStudentSubjects] = useState(["DSA", "DEV"]);
  const [TotalClassesPerSubject, setTotalClassesPerSubject] = useState([
    0, 0, 0,
  ]);
  const [TotalAttendancePerSubject, setTotalAttendancePerSubject] = useState([
    0, 0, 0,
  ]);
  const [studData, setstudData] = useState({
    labels: studentData.map((data) => data.subject),
    datasets: [
      {
        label: "Attendance Percentage",
        data: studentData.map((data) => data.attendance),
        backgroundColor: ["violet", "blue", "green", "red", "gray"],
      },
    ],
  });

  const navigate = useNavigate();

  //jwt authorisation for getting the details of the currently logged in user
  const [userData, setUserData] = useState({});
  const callSlogin = async () => {
    try {
      const res = await fetch("/afterslogin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        navigate("/tlogin");
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/loginstud");
    }
  };

  // Array Storing all the subjects in which he is enrolled
  const [flag, setflag] = useState(true);
  const [flag2, setflag2] = useState(false);

  const getSubjects = async () => {
    try {
      setflag(true);
      const res = await fetch(`/checksubjects/${userData.email}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (!data.subject) {
        window.alert(
          `${userData.name} you are currently not enrolled in any subjects`
        );
      }
      SetStudentSubjects(data.subject);
      console.log(StudSubjects);
      if (!res.status === 200) {
        const error = new Error(res.error);
        navigate("/tlogin");
        throw error;
      }
    } catch (err) {
      console.log(err);
      window.alert(
        `${userData.name} you are currently not enrolled in any subjects`
      );
    }
  };

  // const [totalnoofclasses, settotalnoofclasses] = useState(31);
  const fetchtotalclasses = (subname, i) => {
    const currSubject = subname;
    const temp = currSubject + "_" + currBranch;
    axios
      .get(
        `http://localhost:3002/api/classesddata/${currSubject}/${currBranch}`
      )
      .then((res) => {
        // console.log(temp);
        // console.log(res.data[0][temp].length);
        // settotalnoofclasses(res.data[0][temp].length);
        setTotalClassesPerSubject((TotalClassesPerSubject) => ({
          ...TotalClassesPerSubject,
          [i]: res.data[0][temp].length,
        }));
      })
      .catch((err) => {
        console.log(err);
        console.log("Data not fetched");
      });
  };

  const FetchAttendanceDetails = (subject, i) => {
    // console.log(props.Subject + "dubiu");
    axios
      .get(`http://localhost:3002/detailstloginusers/${userData.email}`)
      .then((res) => {
        // console.log(res.data[subject].length);
        // console.log(props.Subject+"dubiu");
        //console.log(res.data.Data_Structures);
        setTotalAttendancePerSubject((TotalAttendancePerSubject) => ({
          ...TotalAttendancePerSubject,
          [i]: (
            ((TotalClassesPerSubject[i] - res.data[subject].length) /
              TotalClassesPerSubject[i]) *
            100
          ).toFixed(2),
        }));
        console.log("Attendance As");
        console.log(TotalAttendancePerSubject[i]);
      })
      .catch((err) => {
        console.log("attendance calculation not possible ");
        console.log(err);
      });
  };
  const getSubjectsAgain = async () => {
    for (let i = 0; i < StudSubjects.length; i++) {
      fetchtotalclasses(StudSubjects[i], i);
      FetchAttendanceDetails(StudSubjects[i], i);
    }

    setstudData({
      labels: StudSubjects,
      datasets: [
        {
          label: "Attendance Percentage",
          data: Object.keys(TotalAttendancePerSubject).map(
            (key) => TotalAttendancePerSubject[key]
          ),
          backgroundColor: ["violet", "blue", "green", "red", "gray"],
        },
      ],
    });
    setflag2(true);
  };
  console.log(StudSubjects);
  console.log(TotalAttendancePerSubject);
  console.log(TotalClassesPerSubject);
  useEffect(() => {
    callSlogin();
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <div className="m-2 text-4xl font-semibold">
            Welcome {userData.name} to DashBoard
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              class="text-white bg-purple-700 mt-3 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 w-25 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={getSubjects}
            >
              Click to view Subject List
            </button>
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
          <div className="flex justify-center items-center">
            <button
              type="button"
              onClick={getSubjectsAgain}
              className="focus:outline-none text-white bg-red-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Get The Graph
            </button>
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
