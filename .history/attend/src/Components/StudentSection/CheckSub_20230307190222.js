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
    } catch (err) {
      console.log(err);
      navigate("/loginstud");
    }
  };

  useEffect(() => {
    callSlogin();
  }, []);

  // Array Storing all the subjects in which he is enrolled
  const [StudSubjects, SetStudentSUbjects] = useState([]);
  const getSubjects = async () => {
    try {
      const res = await fetch("/checksubs", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      SetStudentSUbjects(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        navigate("/tlogin");
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/loginstud");
    }
    } catch (err) {
      console.log(err);
    }
  };
  return <div>My email id is {userData.email}</div>;
};

export default CheckSub;
