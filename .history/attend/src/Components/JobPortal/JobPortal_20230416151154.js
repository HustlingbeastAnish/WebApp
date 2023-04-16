import React, { useContext } from "react";
import axios from "axios";
import useState from "react-usestateref";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "../Card";

const Job = () => {
  const [country, setcountry, countryRef] = useState("in");
  const [search, setsearch, searchRef] = useState("sde");
  const [loc, setloc, locRef] = useState("bangalore");
  const [Arr, setArr, ArrRef] = useState([{}]);
  const fetchJobs = () => {
    axios
      .get(
        `https://api.adzuna.com/v1/api/jobs/${country}/search/1?&results_per_page=20&content-type=application/json&app_id=24852f12&app_key=c93fe974f8009e5341efb9e2ce97e08f&what=${search}&where=${loc}`
      )
      .then((res) => {
        if (res.data.results) {
          console.log(countryRef.current);
          console.log(locRef.current);
          console.log(locRef.current);
          setArr(res.data.results);
          setflag(true);
        } else {
          window.alert("Please Enter valid credentials");
        }
      })
      .catch((err) => {
        window.alert("Please enter valid Location");
        console.log(err);
      });
  };
  //   a.update();
  const [flag, setflag, flagRef] = useState(false);
  return (
    <div className="mt-5 flex p-5 flex-col">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="location"
          value={countryRef.current}
          label="location"
          onChange={(e) => {
            setcountry(e.target.value);
          }}
        >
          <MenuItem value={"in"}>India</MenuItem>
          <MenuItem value={"at"}>Austria</MenuItem>
          <MenuItem value={"au"}>Austrailia</MenuItem>
          <MenuItem value={"be"}>Berlin</MenuItem>
          <MenuItem value={"ca"}>Canada</MenuItem>
          <MenuItem value={"ch"}>China</MenuItem>
          <MenuItem value={"de"}>Denmark</MenuItem>
          <MenuItem value={"es"}>Twenty</MenuItem>
          <MenuItem value={"fr"}>France</MenuItem>
          <MenuItem value={"gb"}>Twenty</MenuItem>
          <MenuItem value={"it"}>Twenty</MenuItem>
          <MenuItem value={"mx"}>Mexico</MenuItem>
          <MenuItem value={"nl"}>Twenty</MenuItem>
          <MenuItem value={"nz"}>Twenty</MenuItem>
          <MenuItem value={"pl"}>Twenty</MenuItem>
          <MenuItem value={"ru"}>Russia</MenuItem>
          <MenuItem value={"sg"}>Twenty</MenuItem>
          <MenuItem value={"us"}>Twenty</MenuItem>
          <MenuItem value={"za"}>Twenty</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="outlined-basic"
        label="Location"
        variant="outlined"
        onChange={(e) => {
          setloc(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Job Despcrition"
        variant="outlined"
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={fetchJobs}
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Get Details
      </button>
      {flag && (
        <div className="grid grid-cols-3 gap-4">
          {Arr.map((elem, idx) => {
            return <Card elem={elem} idx={idx + 1} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Job;
