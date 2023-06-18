var userdb = require("../model/model");

exports.create = (req, res) => {
  // If users submits an empty form while registering
  if (req.body === null) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  // Create a New User with the given credentials
  const user = new userdb({
    name: req.body.name,
    email: req.body.email,
    password: req.body.passwords,
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
