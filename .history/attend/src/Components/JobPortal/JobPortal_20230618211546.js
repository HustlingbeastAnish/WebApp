import React, { useContext } from "react";
import axios from "axios";
import useState from "react-usestateref";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import JobCard from "./JobCard";
import { Button, Grid } from "@mui/material";

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

  const [flag, setflag, flagRef] = useState(false);

  return (
    <div className="flex bg-gray-900 h-screen p-5 flex-col">
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <FormControl fullWidth style={{ color: "white" }}>
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "white" }}
            >
              Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="location"
              value={countryRef.current}
              label="location"
              style={{
                color: "white",
                border: "2px solid white",
                backgroundColor: "gray-900",
              }}
              MenuProps={{
                MenuListProps: {
                  style: {
                    backgroundColor: "gray",
                  },
                },
              }}
              onChange={(e) => {
                setcountry(e.target.value);
              }}
            >
              <MenuItem value={"in"} style={{ color: "white" }}>
                India
              </MenuItem>
              <MenuItem value={"at"} style={{ color: "white" }}>
                Austria
              </MenuItem>
              <MenuItem value={"au"} style={{ color: "white" }}>
                {" "}
                Austrailia
              </MenuItem>
              <MenuItem value={"be"} style={{ color: "white" }}>
                Berlin
              </MenuItem>
              <MenuItem value={"ca"} style={{ color: "white" }}>
                Canada
              </MenuItem>
              <MenuItem value={"ch"} style={{ color: "white" }}>
                China
              </MenuItem>
              <MenuItem value={"de"} style={{ color: "white" }}>
                Denmark
              </MenuItem>
              <MenuItem value={"es"} style={{ color: "white" }}>
                Spain
              </MenuItem>
              <MenuItem value={"fr"} style={{ color: "white" }}>
                France
              </MenuItem>
              <MenuItem value={"gb"} style={{ color: "white" }}>
                United Kingdom
              </MenuItem>
              <MenuItem value={"it"} style={{ color: "white" }}>
                Italy
              </MenuItem>
              <MenuItem value={"mx"} style={{ color: "white" }}>
                Mexico
              </MenuItem>
              <MenuItem value={"nl"} style={{ color: "white" }}>
                Netherlands
              </MenuItem>
              <MenuItem value={"nz"} style={{ color: "white" }}>
                New Zealand
              </MenuItem>
              <MenuItem value={"pl"} style={{ color: "white" }}>
                Poland
              </MenuItem>
              <MenuItem value={"ru"} style={{ color: "white" }}>
                Russia
              </MenuItem>
              <MenuItem value={"sg"} style={{ color: "white" }}>
                Singapore
              </MenuItem>
              <MenuItem value={"us"} style={{ color: "white" }}>
                United States
              </MenuItem>
              <MenuItem value={"za"} style={{ color: "white" }}>
                South Africa
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12} item>
          <TextField
            id="outlined"
            label="Location"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              style: {
                color: "white",
              },
              className: "custom-label",
            }}
            InputProps={{
              style: {
                color: "white",
                border: "2px solid white",
                backgroundColor: "gray-900",
              },
            }}
            onChange={(e) => {
              setloc(e.target.value);
            }}
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            id="outlined"
            label="Job Description"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              style: {
                color: "white",
              },
              className: "custom-label",
            }}
            InputProps={{
              style: {
                color: "white",
                border: "2px solid white",
                backgroundColor: "gray-900",
              },
            }}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </Grid>
        <Grid sx={{ margin: "2% auto" }} xs={3} sm={3} item>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={fetchJobs}
          >
            Find
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
        </Grid>

        {flag && (
          <Grid container spacing={2}>
            {ArrRef.current.map((elem, idx) => (
              <JobCard key={idx} elem={elem} idx={idx + 1} />
            ))}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Job;
