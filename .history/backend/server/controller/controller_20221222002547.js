var userdb = require("../model/model");
var Stuser = require("../model/stuModel");
var Slogintuser = require("../model/stuLogin");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.create = async (req, res) => {
  // If users submits an empty form while registering
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    console.log("None of the fields can be empty");
  }
  try {
    //check if user exist
    const userExists = await userdb.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = new userdb({
      name,
      email,
      password,
    });

    const signUp = await user.save();
    if (signUp) {
      res.status(201).json({ message: "Registration Successful" });
    } else {
      res.status(500).json({ error: "Registration Failed" });
    }
  } catch (err) {
    console.log(err);
  }
};
// Function to make a post request to the create a student

exports.stucreate = async (req, res) => {
  try {
    const { name, email, phone, branch, subject } = req.body;
    if (!name || !email || !phone || !subject || !branch) {
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
              const stloginuser = new Slogintuser({
                email: email,
                phone: phone,
              });
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
  } catch (err) {
    console.log(err);
  }
};

// To find if the user is with us
exports.find = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
      console.log(email);
      console.log(password);
      return res.status(400).json({ error: "None of the feilds can be empty" });
    }

    const emailExists = await userdb.findOne({ email: email });
    console.log(emailExists);
    if (emailExists) {
      const PassMatch = await bcrypt.compare(password, emailExists.password);

      const token = await emailExists.generateAuthToken();

      if (!PassMatch) {
        res.status(400).json({ error: "Please Enter valid User Credentials" });
      } else {
        res.json({ message: "User SignIn Successfully" });
      }
    } else {
      res.status(400).json({ error: "Please Enter valid User Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};
