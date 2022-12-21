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
});

const Stloginuser = mongoose.model("STLOGINUSER", stuloginSchema);

module.exports = Stloginuser;
