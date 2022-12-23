import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { useContext } from "react";

const TakeAttend = () => {
  const [Subject, setSubject] = useState("");
  const [Branch, setBranch] = useState("");

  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  const handleChangeBranch = (e) => {
    setBranch(e.target.value);
  };
  return (
    <div className="flex border-black bg-gray-200 flex-col h-[670px] justify-center items-center">
      <h1 className="font-semibold text-3xl">Please from the below DropDown</h1>
      <div className="mt-10">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Branch}
            style={{ width: "450px" }}
            label="Branches"
            onChange={handleChangeBranch}
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

      <div className="mt-10">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Subjects</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Subject}
            style={{ width: "450px" }}
            label="Subjects"
            onChange={handleChange}
          >
            <MenuItem value={"Data Structures"}>Data Structures</MenuItem>
            <MenuItem value={"Operating System"}>Operating System</MenuItem>
            <MenuItem value={"Computer Networks"}>Computer Networks</MenuItem>
            <MenuItem value={"Object Oriented Programming"}>
              Object Oriented Programming
            </MenuItem>
            <MenuItem value={"DBMS"}>DBMS</MenuItem>
            <MenuItem value={"Numerical Methods"}>Numerical Methods</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="relative mt-10">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          datepicker="true"
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
        />
      </div>

      <div className="mt-40">
        <Link to="/makeattend">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Mark Attendance
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default TakeAttend;
// export { subject, branch };
