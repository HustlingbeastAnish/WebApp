var userdb = require("../model/model");

exports.create = (req, res) => {
  // If users submits an empty form while registering
  if (req.body === null) {
    res.status(400).send({ message: "None of the Feilds can be Empty" });
    return;
  }

  // Create a New User with the given credentials
  const user = new userdb({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  // Saving the user in the database
  user
    .save(user)
    .then((data) => {
      res.redirect("add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};

// To find if the user is with us

exports.find = (req, res) => {
  if (req.query.id === null) {
    const id = req.query.id;

    userdb
      .findById(id)
      .then((data) => {
        if (data === null) {
          res.status(400).send({
            message: "No User Found",
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        console.log(`Error retrieving the user with the ${id}`);
      });
  } else {
    userdb
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error Occurred",
        });
      });
  }
};
