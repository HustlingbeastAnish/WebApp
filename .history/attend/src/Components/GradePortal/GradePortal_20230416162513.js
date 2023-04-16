import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import useState from "react-usestateref";

const GradePortal = (props) => {
  const [Student, setStudent] = useState({
    name: props.AuthorizedStud.name,
    email: props.AuthorizedStud.email,
    subject: "DSA",
    marks: 0,
  });
  let name, value;
  const handle = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setStudent({ ...Student, [name]: value });
  };
  const PostGrade = async (e) => {
    console.log(Student);
    e.preventDefault();
    const { name, email, subject, marks } = Student;
    const res = await fetch("/gradepost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        marks,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 400 || !data || data.error) {
      window.alert("Grade Failed");
    } else {
      window.alert("Grade Successful");
    }
  };
  return (
    <>
      <Card
        style={{
          width: "100%",
          margin: "auto",
          padding: "25px 6px",
          backgroundColor: "#E5E4E2",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontWeight: "700", margin: "auto" }}
            variant="h4"
          >
            Hey Anish!
          </Typography>
          <Typography
            style={{ fontWeight: "400", margin: "auto auto 7% auto" }}
            variant="h6"
          >
            Enter your grades for details
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  name="subject"
                  label="Enter Subject"
                  type="text"
                  value={Student.subject}
                  onChange={handle}
                  fullWidth
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Enter Marks"
                  type="number"
                  name="marks"
                  value={Student.marks}
                  onChange={handle}
                  fullWidth
                />
              </Grid>
              <Grid
                sx={{
                  margin: "auto",
                  padding: "auto auto 2% auto",
                }}
                xs={12}
                item
              >
                <Button
                  sx={{
                    borderRadius: 6,
                  }}
                  type="submit"
                  onClick={PostGrade}
                  variant="contained"
                >
                  Submit Grades
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default GradePortal;
