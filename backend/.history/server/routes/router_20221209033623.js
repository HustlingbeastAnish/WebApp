const express = require("express");
const route = express.Router();
const services = require("../services/render");

route.get("/add-user",services.add_user )
);

module.exports = route;
