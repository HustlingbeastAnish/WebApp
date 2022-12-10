var userdb = require("../model/model");

exports.create = async (req, res) => {
  // If users submits an empty form while registering
  if (req.body === null) {
    res.status(400).send({ message: "None of the Feilds can be Empty" });
    return;
  }

  try{

    // To check whether we have a user with same email existing
    const userExists=await userdb.findOne({email:req.body.email})
    if (userExists) {
      return res.status(422).json({ message: "The email alreaedy Exists" });
    }

    const user = new userdb({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
              
    const signUp=await user.save();

    if(signUp)
    {
      res.status(201).json({message:"Registration Successful"});
    }
    else
    {

    }
}.catch((err)=>{

});
}
// To find if the user is with us

exports.find = (req, res) => {
  if (req.query.id === null) {
    const id = req.query.id;

    userdb
      .findById(id)
      .then((data) => {
        if (data === null) {
          res.status(400).send({
            message: "No User Found",
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        console.log(`Error retrieving the user with the ${id}`);
      });
  } else {
    userdb
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error Occurred",
        });
      });
  }
};
