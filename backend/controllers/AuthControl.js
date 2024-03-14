const { log } = require("console");
const { theUser } = require("../models/User");
// const createToken = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code, err);
  let errors = { email: "", password: "" };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "That email is already in use.";
    return errors;
  }
  // validation errors
  if (err.message.includes("newUser validation failed")) {
    console.log(err);
    Object.values(err.errors).forEach((properties) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: maxAge });
};
module.exports.user_post_signup = async (req, res) => {
  const {
    firstName,
    lastName,
    image,
    email,
    password,
    confirmPassword,
  } = req.body.newUser;
  try {
    const user = await theUser.create({
      firstName,
      lastName,
      image,
      email,
      password,
      confirmPassword,
    });
    const token = createToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      maxAge: maxAge,
    });
    res.status(201).json({ user: user, message: "Hello...", status: true });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ message: errors, status: false });
    console.log(err);
  }
};

module.exports.user_post_login = async (req, res, next) => {
  const { email, password } = req.body.user;

  try {
    const user = await theUser.login(email, password);

    const token = createToken(user._id);
    await res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      maxAge: maxAge,
    });
    res.status(200).json({
      user: user,
      authToken: token,
      message: "Welcome Back",
      status: true,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "err", status: true });
  }
  next();
};

module.exports.user_refresh = async (req, res) => {
  const  id  = await req.body.token;
  if (id) {
    const userData = await theUser.findById({ _id: id });
    try {
      res.status(200).json({data:userData})
      // const {firstName,lastName,image,email,_id}= userData;
    } catch (err) {
      console.log(err);
    }
  }
  // console.log(userData._id);
};
