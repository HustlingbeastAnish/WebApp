import React, { useState, useEffect } from "react";
import "flowbite";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbarlogin from "../Navbar/navbarlogin";

function MarkAttend(props) {
  const navigate = useNavigate();

  const currSubject = props.Subject;
  const currBranch = props.Branch;

  const currSubjArr = currSubject.replaceAll(" ", "_");

  const [studentData, setstudentData] = useState([]);

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const dayy = props.SelectedDate.getDate();
  const monthh = props.SelectedDate.getMonth() + 1;
  const yearr = props.SelectedDate.getFullYear();
  const datee = `${dayy}-${monthh}-${yearr}`;

  const [absentcount, Setabsentcount] = useState([]);

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

        if (!data || data.status === 422 || data.error) {
         
         
        } else {
          Swal.fire({
            title: "Attendance Posted Sucessfully",
            icon: "success",
            timer: 1000,
          });
          setTimeout(() => {
            navigate("/tlogin");
          }, 1500);

          
        }
      }
    }

  };
  const [flag, setflag] = useState(false);

  const fetchStudentDetails = () => {
    axios
      .get(`http://localhost:8080/api/studdata/${currSubjArr}/${currBranch}`)
      .then((res) => {
    
        const temp = res.data;
        setstudentData(temp);
     
        axios
          .get(
            `http://localhost:8080/api/classesddata/${currSubject}/${currBranch}`
          )
          .then((res) => {
            const tempp = currSubject + "_" + currBranch;
            settotalnoofclasses(res.data[0][tempp].length);
            const totclass = res.data[0][tempp].length;

            temp.map((elem, idx) => {
          
              axios
                .get(`http://localhost:8080/detailstloginusers/${elem.email}`)
                .then((res) => {
                

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
                
                });
            });
          })
          .catch((err) => {
          
          });
      })

      .catch((err) => {
       
      });
  };

  const [totalnoofclasses, settotalnoofclasses] = useState(10);

  const FetchChangedChangedAttendanceDetails = (elem, idx) => {
    
    axios
      .get(`http://localhost:8080/detailstloginusers/${elem.email}`)
      .then((res) => {
    
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
    <Navbarlogin/>
      <div className="bg-gray-900 h-screen border-black flex flex-col items-center pt-10">
        <h2 className="text-center font-semibold text-3xl mt-2 text-white">
          Showing Details for {`${dayy}/${monthh}/${yearr}`}
        </h2>
        {!flag && <Spinner />}
        {flag && (
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-4/5 mt-10">
            <div className="flex justify-between items-center py-4 bg-gray-600 dark:bg-gray-800 ">
              <div className="mx-96 w-96">
                
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
                    <tr className="bg-gray-600 border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                      <td className="p-4 w-4 text-white">
                        <h1>{idx + 1}</h1>
                      </td>
                      <th
                        scope="row"
                        className="flex items-center py-4 px-6 text-white whitespace-nowrap dark:text-white"
                      >
                        <div className="pl-3">
                          <div className="text-base font-semibold">
                            {elem.name}
                          </div>
                          <div className="font-normal text-white">
                            {elem.email}
                          </div>
                        </div>
                      </th>
                      <td className="py-4 px-6 text-white">{elem.roll}</td>
                      <td className="py-4 px-6 text-white">{currSubject}</td>
                      <td className="py-4 px-6 text-white">{currBranch}</td>
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
                          <span class="ml-3 text-sm font-medium text-white dark:text-gray-300">
                            {absent[idx][1] === "1" ? "Absent" : "Present"}
                          </span>
                        </label>
                      </div>
                      <td className="py-4 px-6 text-white">
                        {absentcount[idx]}
                      </td>
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
