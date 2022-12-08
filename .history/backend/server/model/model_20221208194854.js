const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
});
