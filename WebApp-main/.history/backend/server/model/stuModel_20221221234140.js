const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  clas: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});
const Stuser = mongoose.model("STUSER", stuSchema);

module.exports = Stuser;
