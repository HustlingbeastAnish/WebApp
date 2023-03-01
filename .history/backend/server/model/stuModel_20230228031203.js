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
  roll: {
    type: String,
    required: true,
    unique: true,
  },
  branch: {
    type: String,
    required: true,
  },
  subject: [String],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
const Stuser = mongoose.model("STUSER", stuSchema);

module.exports = Stuser;
