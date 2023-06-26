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
  //   a.update();
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
        </Grid>
        <Grid xs={12} item>
          <TextField
            id="outlined"
            label="Location"
            style={{ color: "white", border: "2px solid white" }}
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setloc(e.target.value);
            }}
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            id="outlined"
            label="Job Despcrition"
            variant="outlined"
            fullWidth
            style={{
              color: "white",
              border: "2px solid white",
              backgroundColor: "grat",
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
            {ArrRef.current.map((elem, idx) => {
              return <JobCard elem={elem} idx={idx + 1} />;
            })}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Job;
