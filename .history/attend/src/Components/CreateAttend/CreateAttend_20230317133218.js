import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const CreateAttend = () => {
  const navigate = useNavigate();

  //jwt authorisation
  const [userData, setUserData] = useState({});
  const callcreateAttend = async () => {
    try {
      const res = await fetch("/aftertlogin", {
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
      navigate("/loginteach");
    }
  };

  useEffect(() => {
    callcreateAttend();
  }, []);

  // Creation of the details of the student
  const [Student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    roll: "",
    branch: "",
    subject: "",
  });

  // Variable for referencing
  let name, value;

  const handle = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setStudent({ ...Student, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    console.log("Post The Students Data");
    const { name, email, phone, roll, branch, subject } = Student;

    // Making a post request to the route /api/students
    const res = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        roll: roll,
        branch: branch,
        subject: subject,
      }),
    });

    const data = await res.json();
    if (!data || data.status === 422 || data.error) {
      console.log("Invalid Registration");
      window.alert("Invalid Registration");
    } else {
      window.alert("Registration is done Successfully");
      navigate("/tlogin");
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="block p-6 rounded-lg shadow-lg bg-gray-300 max-w-xl w-[450px] mt-5">
        <form>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Name
            </label>
            <input
              type="name"
              name="name"
              value={Student.name}
              onChange={handle}
              className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group mb-3">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={Student.email}
              onChange={handle}
              className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="w-full">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label font-semibold">
                Branch
              </InputLabel>
              <Select
                style={{
                  borderRadius: "8px",
                  height: "45px",
                  fontSize: "15px",
                  backgroundColor: "white",
                  borderColor: "black",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Student.branch}
                name="branch"
                label="Branches"
                onChange={handle}
              >
                <MenuItem value={"CSE"}>CSE</MenuItem>
                <MenuItem value={"IT"}>IT</MenuItem>
                <MenuItem value={"ECE"}>ECE</MenuItem>
                <MenuItem value={"EEE"}>EEE</MenuItem>
                <MenuItem value={"MECH"}>MECH</MenuItem>
                <MenuItem value={"CIVIL"}>CIVIL</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-group mb-2">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="phone"
              name="phone"
              value={Student.phone}
              onChange={handle}
              className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Roll Number
            </label>
            <input
              type="phone"
              name="roll"
              value={Student.RollNumber}
              onChange={handle}
              className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <div className="w-full mb-5">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Subjects</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="subject"
                id="demo-simple-select"
                value={Student.subject}
                style={{
                  borderRadius: "8px",
                  height: "45px",
                  fontSize: "15px",
                  backgroundColor: "white",
                  borderColor: "black",
                }}
                label="Subjects"
                onChange={handle}
              >
                <MenuItem value={"Data Structures"}>Data_Structures</MenuItem>
                <MenuItem value={"Operating System"}>Operating_System</MenuItem>
                <MenuItem value={"Computer Networks"}>
                  Computer_Networks
                </MenuItem>
                <MenuItem value={"Object Oriented Programming"}>
                  Object_Oriented_Programming
                </MenuItem>
                <MenuItem value={"DBMS"}>DBMS</MenuItem>
                <MenuItem value={"Numerical Methods"}>
                  Numerical_Methods
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <button
            type="submit"
            className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
            onClick={PostData}
          >
            Create Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAttend;
