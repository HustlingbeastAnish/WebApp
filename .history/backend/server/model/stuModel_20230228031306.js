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

// Generation of token for stuser
stuSchema.methods.generateAuthToken = async function () {
  try {
    let tokenUser = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: tokenUser });
    await this.save();
    return tokenUser;
  } catch (err) {
    console.log(err);
  }
};
module.exports = Stuser;
