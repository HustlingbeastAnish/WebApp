var userdb = require("../model/model");

exports.create = (req, res) => {
  // If users submits an empty form while registering
  if (req.body === null) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  // Create a New User with the given credentials
  const user = new userdb();
};
