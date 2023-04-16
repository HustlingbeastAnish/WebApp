import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

function JobCard(props) {
  const i = props.idx;
  const elem = props.elem;
  console.log(elem);
  const compName = elem.company.display_name.substring(0, 13) + "...";
  const jobDesc = elem.description.substring(0, 200) + "...";

  return (
    <>
      <Grid xs={12} sm={4} item>
        <Card sx={{ borderRadius: 4, backgroundColor: "#262727" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 40, fontWeight: 500, color: "#ffffff" }}
              variant="h2"
            >
              {compName}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography sx={{ color: "#ffffff" }} variant="p">
              {jobDesc}
            </Typography>
          </CardContent>

          <CardContent>
            <Button
              component={Link}
              to={elem.redirect_url}
              //   target="_blank"
              sx={{ color: "#000000", fontWeight: 700 }}
              color="secondary"
              variant="contained"
            >
              <a>Read More</a>
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default JobCard;
