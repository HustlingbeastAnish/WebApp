const express = require("express");
const route = express.Router();
const services = require("../services/render");

route.get("/add-user", (req, res) => {
  res.render("add-user");
});

module.exports = route;
