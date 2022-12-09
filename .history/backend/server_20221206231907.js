const express = require("express");

const app = express();

app.get("/", (req, re) => {
  res.send("BackEnd");
});

app.listen(3000, () => {
  console.log("Attendance Backend is Ready");
});
