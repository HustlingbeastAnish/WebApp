const express = require("express");

const app = express();

app.get("/", (req, re) => {
  res.send("BackEnd");
});
