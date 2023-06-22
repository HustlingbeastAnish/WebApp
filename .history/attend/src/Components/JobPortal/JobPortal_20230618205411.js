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
              style={{ color: "white", border: "2px solid white" }}
              onChange={(e) => {
                setcountry(e.target.value);
              }}
            >
              <MenuItem value={"in"} style={{ backgroundcolor: "white" }}>
                India
              </MenuItem>
              <MenuItem value={"at"} style={{ backgroundcolor: "white" }}>
                Austria
              </MenuItem>
              <MenuItem value={"au"} style={{ backgroundcolor: "white" }}>
                Austrailia
              </MenuItem>
              <MenuItem value={"be"} style={{ backgroundcolor: "white" }}>
                Berlin
              </MenuItem>
              <MenuItem value={"ca"} style={{ backgroundcolor: "white" }}>
                Canada
              </MenuItem>
              <MenuItem value={"ch"} style={{ backgroundcolor: "white" }}>
                China
              </MenuItem>
              <MenuItem value={"de"} style={{ backgroundcolor: "white" }}>
                Denmark
              </MenuItem>
              <MenuItem value={"es"} style={{ backgroundcolor: "white" }}>
                Spain
              </MenuItem>
              <MenuItem value={"fr"} style={{ backgroundcolor: "white" }}>
                France
              </MenuItem>
              <MenuItem value={"gb"} style={{ backgroundcolor: "white" }}>
                United Kingdom
              </MenuItem>
              <MenuItem value={"it"} style={{ backgroundcolor: "white" }}>
                Italy
              </MenuItem>
              <MenuItem value={"mx"} style={{ backgroundcolor: "white" }}>
                Mexico
              </MenuItem>
              <MenuItem value={"nl"} style={{ backgroundcolor: "white" }}>
                Netherlands
              </MenuItem>
              <MenuItem value={"nz"} style={{ backgroundcolor: "white" }}>
                New Zealand
              </MenuItem>
              <MenuItem value={"pl"} style={{ backgroundcolor: "white" }}>
                Poland
              </MenuItem>
              <MenuItem value={"ru"} style={{ backgroundcolor: "white" }}>
                Russia
              </MenuItem>
              <MenuItem value={"sg"} style={{ backgroundcolor: "white" }}>
                Singapore
              </MenuItem>
              <MenuItem value={"us"} style={{ backgroundcolor: "white" }}>
                United States
              </MenuItem>
              <MenuItem value={"za"} style={{ backgroundcolor: "white" }}>
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
              className: "custom-label", // Add a class name for custom styling
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
          <Button
            sx={{ borderRadius: 6 }}
            type="button"
            onClick={fetchJobs}
            variant="contained"
          >
            Get Details
          </Button>
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
