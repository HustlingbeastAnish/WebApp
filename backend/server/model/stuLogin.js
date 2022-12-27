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
<<<<<<< HEAD
  subject: [String],
  DBMS: [String],
  Data_Structures: [String],
  Operating_System: [String],
  Computer_Networks: [String],
  Object_Oriented_Programming: [String],
  Numerical_Methods: [String],
});
=======
},{strict: false});
>>>>>>> ccc40f58aa1d203914e5cea45eb955fa9916a29e

const Stloginuser = mongoose.model("STLOGINUSER", stuloginSchema);

module.exports = Stloginuser;
