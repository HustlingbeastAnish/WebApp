import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TakeAttend = (props) => {
  const handleDate = (date) => {
    props.setSelectedDate(date);
  };
  return (
    <>
      <div className="flex border-black bg-gray-200 flex-col h-[670px] justify-center items-center">
        <h1 className="font-semibold text-3xl">
          Please from the below DropDown
        </h1>
        <div className="mt-10">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.Branch}
              style={{ width: "450px" }}
              label="Branches"
              onChange={props.handleChangeBranch}
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
              value={props.Subject}
              style={{ width: "450px" }}
              label="Subjects"
              onChange={props.handleChange}
            >
              <MenuItem value={"Data Structures"}>Data_Structures</MenuItem>
              <MenuItem value={"Operating System"}>Operating_System</MenuItem>
              <MenuItem value={"Computer Networks"}>Computer_Networks</MenuItem>
              <MenuItem value={"Object Oriented Programming"}>
                Object_Oriented_Programming
              </MenuItem>
              <MenuItem value={"DBMS"}>DBMS</MenuItem>
              <MenuItem value={"Numerical Methods"}>Numerical_Methods</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="relative mt-10">
          <h2 className="font-semibold text-xl">Please Select the Date </h2>
          <DatePicker
            selected={props.SelectedDate}
            onChange={handleDate}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            dateFormat={`dd/MM/yyyy`}
            showYearDropdown
            scrollableMonthYearDropdown
            isClearable
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
    </>
  );
};
export default TakeAttend;
