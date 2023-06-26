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
        <div class="max-w-sm p-6 bg-gray-600 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg
            class="w-10 h-10 mb-2 text-white dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
              clip-rule="evenodd"
            ></path>
            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
          </svg>
          <a href="/#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
              {compName}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {jobDesc}
          </p>
          <a
            href={elem.redirect_url}
            class="inline-flex items-center text-blue-600 hover:underline"
          >
            Explore More
            <svg
              class="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </div>
      </Grid>
    </>
  );
}

export default JobCard;
