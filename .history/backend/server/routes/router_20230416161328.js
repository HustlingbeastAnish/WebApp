const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
const authenticate = require("../middleware/authenticate.js");
const authenticatestu = require("../middleware/authenticatestud.js");
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
// Get request to get the total number of classes
route.get("/api/classesddata/:subject/:branch", controller.totalnoofclasses);
// To check if a student is registered or not
route.post("/api/userstud", controller.findStud);

route.post("/api/students", controller.stucreate);

route.post("/api/absentstud", controller.AbsentDates);

// To Update a user using the put request
route.put("/api/studdata/:id", controller.update);
route.put("/api/teacherdata/:id", controller.updateteacher);

route.post("/api/alldates", controller.AllDates);

route.get("/aftertlogin", authenticate, (req, res) => {
  res.send(req.rootUser);
});
route.get("/afterslogin", authenticatestu, (req, res) => {
  res.send(req.rootUser);
});
route.post("/gradepost", async (req, res) => {
  const { name, email, subject, marks } = req.body;
  console.log(req.body);
  if (!name || !email || !subject || !marks) {
    res.status(400).json({ error: "Please fill in all the details" });
  }
  try {
    const subObj = {
      subject,
      marks,
    };
    const findEmail = await Grades.findOne({ email: email });
    if (findEmail) {
      if (
        findEmail.subject.filter((e) => {
          return e.subject == subject;
        }).length == 0
      ) {
        const updatedSubject = await Grades.findOneAndUpdate(
          { email: email },
          {
            $push: { subject: subObj },
          },
          { new: true }
        );
        if (updatedSubject) {
          res.status(200).json({
            message: "Successfully updated the subject",
            updatedSubject,
          });
        } else {
          res.status(500).json({ message: "Error in updating subject" });
        }
      } else {
        res.status(400).json({ error: "Subject already exists for the email" });
      }
    } else {
      const arr = [subObj];
      const student = new Grades({
        name,
        email,
        subject: arr,
      });
      const stud = await student.save();
      if (stud) {
        res.status(201).json({ message: "Grade entry Successful" });
      } else {
        res.status(400).json({ error: "Grade Entry Failed" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// Route to get the details of the student from the collection stloginusers
route.get("/detailstloginusers/:email", controller.getstlogindetails);

// Route to get the details of the subjects in which a student is enrolled
route.get("/checksubjects/:email", controller.getsubjectsenrolled);

// Route for the forgot password
route.post("/forgotpassword", controller.forgotpassword);
route.get("/resetpassword/:id/:token", controller.resetpassword);

// Get request to get the details of student to see attendance
route.get("/api/getstuddata/:email", controller.findStudbyemail);

route.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logout");
});

module.exports = route;
