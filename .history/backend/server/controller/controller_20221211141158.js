var userdb = require("../model/model");

exports.create = async (req, res) => {
  // If users submits an empty form while registering
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all field");
  }

  try {
    //check if user exist
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = new userdb({
      name,
      email,
      password,
    });

    const signUp = await user.save();
    if (signUp) {
      res.status(201).json({ message: "Registration Successful" });
    } else {
      res.status(500).json({ error: "Registration Failed" });
    }
  } catch (err) {
    console.log(err);
  }
};

// To find if the user is with us
exports.find = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!emaill || !password) {
      return res.status(400).json({ error: "None of the feilds can be empty" });
    }

    const emailExists = await userdb.findOne({ email: req.body.email }).exec();

    if (emailExists === null) {
      res.status(500).json({ errr: "Login Failed" });
    } else {
      res.status(201).json({ message: "User Successfully Logged In" });
      console.log("User Successfully Logged In");
    }
  } catch (err) {
    console.log(err);
  }
};
