const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({}, { strict: false });

const Subj = mongoose.model("SUBJECTS", subSchema);

module.exports = Subj;
