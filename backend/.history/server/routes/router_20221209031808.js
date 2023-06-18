const express = require("express");
const route = express.Router();

route.get("/add-user", (req, res) => {
  res.render("add-user");
});
