import React from "react";
import { useEffect } from "react";
import useState from "react-usestateref";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckSub = (props) => {
  const navigate = useNavigate();

  const userData = props.AuthorizedStud;
  console.log(userData.email);
  // Array Storing all the subjects in which he is enrolled
  const [flag, setflag] = useState(false);
  const [StudSubjects, SetStudentSubjects, StudSubjectsRef] = useState([]);
  const getSubjects = () => {
    axios
      .get(`http://localhost:3002/checksubjects/${userData.email}`)
      .then((res) => {
        const vari = res.data.subject;
        SetStudentSubjects(vari);
        console.log(StudSubjectsRef.current);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSubjects();
  }, []);
  console.log(StudSubjectsRef.current.subject);
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
            <table class="w-2/3 text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-white-100 uppercase bg-gray- dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3 text-2xl font-bold">
                    Subjects
                  </th>
                  <th scope="col" class="px-6 py-3 text-2xl font-bold">
                    Status
                  </th>
                </tr>
              </thead>
              {StudSubjectsRef.current.map((elem, idx) => {
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
    </div>
  );
};

export default CheckSub;
