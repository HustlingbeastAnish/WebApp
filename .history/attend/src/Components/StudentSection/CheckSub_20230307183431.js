import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const CheckSub = () => {
  //jwt authorisation
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
        // navigate("/tlogin");
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
  return <div></div>;
};

export default CheckSub;
