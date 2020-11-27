const bcrypt = require("bcryptjs");
const owNer = require("../models/loginSchema");
const jwt = require("jsonwebtoken");
const { registerValidation, LoginValidation } = require("../validation");

const Registration = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const email = await owNer.findOne({ email: req.body.email });
  if (email) {
    return res.status(400).send("The Email Id is already present.");
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  const newOwner = new owNer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    await newOwner.save();
    res.send("Registration Completed!");
  } catch (err) {
    res.status(400).send(err);
  }
};

const Login = async (req, res) => {
  const { error } = LoginValidation(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const user = await owNer.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Please Enter correct Email");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Please enter valid Password!");
  }
  res.send("Successfully Logged In");
};
module.exports = { Registration, Login };