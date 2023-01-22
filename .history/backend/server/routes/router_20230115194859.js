const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
const authenticate = require("../middleware/authenticate.js");
const { Router } = require("express");

route.get("/", (req, res) => {
  res.render(`index`);
});
// route.get("/api/add-user", services.add_user);
//API Request
//___________________________________________________________________________________
// This is to Add the user details in the databse i.e Now the User is Regestered with us after this
route.post("/api/users", controller.create);
// This is to find details of the user in the databse i.e checking during the Login
// If he is registered with us or not
route.post("/api/userf", controller.find);

// Get request to get the details of student with a feild
route.get("/api/studdata/:subject/:branch", controller.findStudWithFeild);
// To check if a student is registered or not
route.post("/api/userstud", controller.findStud);

route.post("/api/students", controller.stucreate);

route.post("/api/absentstud", controller.AbsentDates);

// To Update a user using the put request
route.put("/api/studdata/:id", controller.update);
route.post("/api/alldates", controller.AllDates);

route.get("/aftertlogin", authenticate, (req, res) => {
  res.send(req.rootUser);
});

// Route for the forgot password
route.post("/api/forgotpassword", controller.forgotpassword);
route.get("/reset-password/:id/:token", controller.resetpassword);

route.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logout");
});

module.exports = route;
