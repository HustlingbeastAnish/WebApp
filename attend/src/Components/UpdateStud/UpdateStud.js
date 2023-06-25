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
                
              </div>
            </div>
            <table className="w-full text-sm text-left text-white dark:text-gray-400">
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
