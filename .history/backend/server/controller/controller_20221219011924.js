var userdb = require("../model/model");

exports.create = async (req, res) => {
  // If users submits an empty form while registering
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    console.log("None of the fields can be empty");
  }
  try {
    //check if user exist
    const userExists = await userdb.findOne({ email });
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
    if (!email || !password) {
      return res.status(400).json({ error: "None of the feilds can be empty" });
    }

    const emailExists = await userdb.findOne({ email: email });

    if (emailExists) {
      const PassMatch = await bcrypt.compare(password, emailExists.password);
      if (!PassMatch) {
        res.status(400).json({ error: "Please Enter valid User Credentials" });
      } else {
        res.json({ message: "User SignIn Successfully" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
