var userdb = require("../model/model");

exports.create = (req, res) => {
  if (req.body === null) {
    res.status(400).send({ message: "Content cannot be empty " });
  }
};
