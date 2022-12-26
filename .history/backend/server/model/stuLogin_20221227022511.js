const mongoose = require("mongoose");

const stuloginSchema = new mongoose.Schema({
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
  subject: [String],
  DBMS: [String],
  DataStructures: [String],
  OperatingSystem: [String],
  ComputerNetworks: [String],
  ObjectOrientedProgramming: [String],
  NumericalMethods: [String],
});

const Stloginuser = mongoose.model("STLOGINUSER", stuloginSchema);

module.exports = Stloginuser;
