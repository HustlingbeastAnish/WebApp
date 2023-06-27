var userdb = require("../model/model");
var Stuser = require("../model/stuModel");
var Slogintuser = require("../model/stuLogin");
var Subjectsatt = require("../model/subjects.js");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Stloginuser = require("../model/stuLogin");

exports.create = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ error: "fill all details" });
    console.log("None of the fields can be empty");
  }
  try {
    const userExists = await userdb.findOne({ email });
    if (userExists) {
      res.status(400).json({ error: "User already exists" });
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
      res.status(400).json({ error: "Registration Failed" });
    }
  } catch (err) {
    console.log(err);
  }
};

/*
exports.changepassword = async(req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data to be updated cannot be empty" });
  }

  const email = req.body.email;
  const cp = req.body.cp;
  const pp = req.body.pp;

  try {
    const emailExists = await userdb.findOne({ email: email });
    if (emailExists) {
      const PassMatch =  bcrypt.compare(pp, emailExists.password);
    
      if (!PassMatch) {
        return res.status(400).json({ error: "Please Enter valid User Credentials" });
      } 
  
    
     
      userdb.findOneAndUpdate(
        { email: email },
        { password: bcrypt.hash(cp, 12)},
        (error, data) => {
          if (error) {
            return res.status(400).json({ error: "Please Enter valid User Credentials" });
  
          } else {
            return res
        .status(201)
        .json({ message: "Absent Marked SuccessFully" });
  
          }
        }
      );
      return res
        .status(201)
        .json({ message: "Absent Marked SuccessFully" });
    }
    res.status(400).json({ error: "email dont exists" });
  } catch (err) {
    console.log(err);
  }
 


 
};

*/
exports.stucreate = async (req, res) => {
  try {
    const { name, email, phone, roll, branch, subject } = req.body;
    if (!name || !email || !phone || !roll || !subject || !branch) {
      return res.status(422).json({ error: "fill in all details" });
    } else {
      console.log(req.body);
      Stuser.findOne({ email: email })
        .then((userexists) => {
          if (userexists) {
            Stuser.findOneAndUpdate(
              { email: email },
              { $addToSet: { subject: subject } },
              (error, data) => {
                if (error) {
                  console.log(error);
                } else {
                  console.log(data);
                }
              }
            );

            Slogintuser.updateOne(
              { email: email },
              { $set: { [subject]: [] } },
              { upsert: false, multi: true },
              (error, data) => {
                if (error) {
                  console.log(error);
                } else {
                  console.log(data);
                }
              }
            );

            return res.status(201).json({ message: "Registration Successful" });
          }

          const stuser = new Stuser({
            name: name,
            email: email,
            phone: phone,
            roll: roll,
            subject: [subject],
            branch: branch,
          });

          stuser
            .save()
            .then(() => {
              const stloginuser = new Slogintuser({
                email: email,
                phone: phone,
                [subject]: [],
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

exports.AbsentDates = async (req, res) => {
  try {
    const { email, subjectName, datee } = req.body;
    if (!email || !subjectName || !datee) {
      res.status(422).json({ error: "fill in all details" });
      console.log("fill in all details");
    } else {
      Slogintuser.findOne({ email: email }).then((StudentExists) => {
        if (StudentExists) {
          Slogintuser.findOneAndUpdate(
            { email: email },
            { $addToSet: { [subjectName]: datee } },
            (error, data) => {
              if (error) {
                console.log(error);
                console.log("There was some error");
              } else {
                console.log(data);
                console.log("Marked");
              }
            }
          );
          return res
            .status(201)
            .json({ message: "Absent Marked SuccessFully" });
        } else {
          res.status(422).json({ error: "Cannot mark Absent" });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};
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

      if (!PassMatch) {
        res.status(400).json({ error: "Please Enter valid User Credentials" });
      } else {
        const token = await emailExists.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.json({ message: "User SignIn Successfully" });
      }
    } else {
      res.status(400).json({ error: "Please Enter valid User Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.findStud = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
      console.log(email);
      console.log(password);
      return res.status(400).json({ error: "None of the feilds can be empty" });
    }
    const emailExists = await Stuser.findOne({ email: email });
    const PassMatch = await Stuser.findOne({ email: email, phone: password });
    console.log(emailExists);
    if (emailExists && PassMatch) {
      const token = await emailExists.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      console.log("Login as Student Succesfully");
      res.json({ message: "Welcome Student" });
    } else {
      res.status(400).json({ error: "Please Enter valid User Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.findStudWithFeild = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(404).json({ err: "Feilds cannot be empty" });
    }

    const subj = req.params.subject;
    const branch = req.params.branch;
    Stuser.find({ subject: subj, branch: branch })
      .then((data) => {
        if (!data) {
          res.status(404).json({ err: "No student with a branch found" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Some error occurred" });
      });
  } catch (err) {
    console.log(err);
  }
};

exports.getstlogindetails = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(404).json({ err: "None of the fields can be empty" });
    }
    const studemail = req.params.email;
    Slogintuser.findOne({ email: studemail })
      .then((data) => {
        if (!data) {
          res.status(400).json({ err: "No Such field found" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Some error occurred" });
      });
  } catch (err) {
    console.log(err);
  }
};

exports.getsubjectsenrolled = (req, res) => {
  const Studemail = req.params.email;
  try {
    if (!req.body) {
      console.log("Email is required to get the subject of student");
    }
    Stuser.findOne({ email: Studemail })
      .then((data) => {
        if (!data) {
          res.status(400).json({ err: "No Subjects found" });
        } else {
          res.send(data);
          console.log(data);
          console.log("Subject Details found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(
      `No able to find the subjects of student with email ${Studemail}`
    );
  }
};
exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data to be updated cannot be empty" });
  }
  const id = req.params.id;
  Stuser.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update a user with ${id} , Maybe User not found`,
        });
      } else {
        return res.status(201).send({ message: "success" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user false Information " });
    });
};

exports.updateteacher = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data to be updated cannot be empty" });
  }
  const id = req.params.id;
  userdb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update a user with ${id} , Maybe User not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user false Information " });
    });
};

exports.AllDates = async (req, res) => {
  try {
    const { subjectName, datee, branch } = req.body;
    if (!subjectName || !datee || !branch) {
      res.status(422).json({ error: "fill in all details" });
      console.log("fill in all details");
    } else {
      Subjectsatt.find({ [subjectName + "_" + branch]: { $exists: true } })
        .then((data) => {
          console.log(data);
          if (!data[0]) {
            const newuser = new Subjectsatt({
              [subjectName + "_" + branch]: [datee],
            });
            newuser
              .save()
              .then(() => {
                return res
                  .status(201)
                  .json({ message: "added attendance date to database" });
              })
              .catch((err) => {
                res.status(500).json({
                  error: "Failed in adding attendance date to database",
                });
              });
          } else {
            Subjectsatt.updateOne(
              { [subjectName + "_" + branch]: { $exists: true } },
              { $addToSet: { [subjectName + "_" + branch]: datee } },
              (error, data) => {
                if (error) {
                  console.log(error);
                  console.log("There was some error");
                } else {
                  console.log(data);
                  console.log("addedattendance date to database");
                }
              }
            );
            return res
              .status(201)
              .json({ message: "added attendance date to database" });
          }
        })
        .catch((err) => {
          res.status(500).json({
            error: "Failed in adding attendance date to database",
          });
        });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.findStudbyemail = async (req, res) => {
  try {
    if (!req.body) {
      console.log("No student with a branch found");
      return res.status(404).json({ err: "Feilds cannot be empty" });
    }

    const email = req.params.email;
    console.log("ok");
    console.log(email);
    Stloginuser.find({ email: email })
      .then((data) => {
        if (!data) {
          console.log("No student with a branch found");
          res.status(404).json({ err: "No student with a branch found" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        console.log("No student with a branch found");
        res.status(500).send({ message: "Some error occurred" });
      });
  } catch (err) {
    console.log(err);
  }
};

// Controller for the forgot password
exports.forgotpassword = async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await userdb.findOne({ email });
    if (!oldUser) {
      res.status(404).json({ error: "No User With this email exists" });
      console.log("No User With this email exists");
    }
    const secret = process.env.SECRET_KEY + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "7m",
    });
    const link = `http://localhost:3002/resetpassword/${oldUser._id}/${token}`;
    // console.log(link);
    res.json({ message: `${link}` });
    res.render("Verified");
  } catch (error) {
    console.log(error);
  }
};

exports.resetpassword = async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await userdb.findOne({ _id: id });
  if (!oldUser) {
    res.status(404).json({ error: "No User With this email exists" });
  }
  const secret = process.env.SECRET_KEY + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.send(`Your Email is Verified `);
    res.status(201).json({ message: "Verified" });
  } catch (error) {
    res.send("Not verified");
  }
};

exports.totalnoofclasses = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(404).json({ err: "Feilds cannot be empty" });
    }

    const subj = req.params.subject;
    const branch = req.params.branch;
    Subjectsatt.find({ [subj + "_" + branch]: { $exists: true } })
      .then((data) => {
        if (!data) {
          res.status(404).json({ err: "No student with a branch found" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Some error occurred" });
      });
  } catch (err) {
    console.log(err);
  }
};
