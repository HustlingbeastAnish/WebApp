var userdb = require("../model/model");

exports.create = async (req, res) => {
  // If users submits an empty form while registering
  if (req.body === null) {
    res.status(400).send({ message: "None of the Feilds can be Empty" });
    return;
  }

  try {
    // To check whether we have a user with same email existing
    const userExists = await userdb.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(422).json({ message: "The email alreaedy Exists" });
    }
    const user = new userdb({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
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
  if (req.body === null) {
    res.status(400).send({ message: "None of the fields can be empty" });
  }

  try{
    const emailExists=await user.findOne({email:req.body.email});
    const passwordExists=await user.findOne({password:req.body.password});

    if(emailExists && passwordExists)
    {
      res.status(201).json({message:"User Successfully Logged In"});
    }
    else 
    {
      res.status(500).json({errr:"Login Failed"});
    }
  }
};
