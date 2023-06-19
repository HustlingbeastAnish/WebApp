const mongoose = require("mongoose");

var Grade = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: [Object],
  },
});
const Grades = mongoose.model("grades", Grade);
module.exports = Grades;
