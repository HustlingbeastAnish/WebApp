const express = require("express");
const route = express.Router();
const services = require("../services/render");

route.get("/add-user", services.add_user);

//API Request
//___________________________________________________________________________________
// This is to Add the user details in the databse i.e Now the User is Regestered with us after this
route.post("/api/users", controller.create);

// This is to find details of the user in the databse i.e checking during the Login
// If he is registered with us or not
route.get("/api/users", controller.find);

module.exports = route;
