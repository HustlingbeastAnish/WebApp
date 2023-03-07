import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const CheckSub = () => {
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
      console.log(StudSubjects);
    } catch (err) {
      console.log(err);
      navigate("/loginstud");
    }
  };

  // Array Storing all the subjects in which he is enrolled
  const [StudSubjects, SetStudentSubjects] = useState([]);
  const getSubjects = async () => {
    try {
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
      SetStudentSubjects(data);
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
  useEffect(() => {
    callSlogin();
  }, []);

  console.log(StudSubjects.subject);
  return (
    <div>
      <div>My email id is {userData.email}</div>
      <button
        type="button"
        class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={{ getSubjects }}
      >
        Purple
      </button>
    </div>
  );
};

export default CheckSub;
