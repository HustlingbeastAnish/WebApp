import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

function JobCard(props) {
  return (
    <>
      <Grid xs={12} sm={4} item>
        <Card sx={{ borderRadius: 4, backgroundColor: "#262727" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 40, fontWeight: 500, color: "#ffffff" }}
              variant="h2"
            >
              Click here to check the list of subjects in which you are enrolled
            </Typography>
          </CardContent>
          <CardContent>
            <Typography sx={{ color: "#ffffff" }} variant="p">
              Click Here to view the attendance in the respective subjects
            </Typography>
          </CardContent>

          <CardContent>
            <Button
              component={Link}
              to={props.link}
              target="_blank"
              sx={{ color: "#000000", fontWeight: 700 }}
              color="secondary"
              variant="contained"
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default JobCard;
