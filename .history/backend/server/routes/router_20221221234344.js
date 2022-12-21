const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

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

route.post("/api/studens", (req, res) => {
  const { name, email, phone, clas, subject } = req.body;
  if (!name || !email || !phone || !subject || !clas) {
    return res.status(422).json({ error: "fill in all details" });
  } else {
    console.log(req.body);

    Stuser.findOne({ email: email })
      .then((userexists) => {
        if (userexists) {
          return res.status(422).json({ error: "user already exists" });
        }

        const stuser = new Stuser({
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          clas: clas,
        });
        stuser
          .save()
          .then(() => {
            const stloginuser = new Slogintuser({ email: email, phone: phone });
            stloginuser
              .save()
              .then(() => {
                return res
                  .status(201)
                  .json({ message: "student successfully added" });
              })
              .catch((err) =>
                res.status(500).json({
                  error: "Failed in adding student to student login database",
                })
              );
          })
          .catch((err) =>
            res.status(500).json({ error: "Failed in adding student" })
          );
      })
      .catch((err) => {
        console.log();
      });
  }
});
module.exports = route;
