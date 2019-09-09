const userController = {};

const { User } = require("../models");

userController.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userController.createUser = async (req, res) => {
  const { fullname, username, email, password } = req.body;
  const newUser = new User({
    fullname,
    username,
    email,
    password
  });
  await newUser.save();
  res.json("User save");
};

userController.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

userController.updateUser = async (req, res) => {
  const { fullname, username, email, password } = req.body;
  await User.findOneAndUpdate(req.params.id, {
    fullname,
    username,
    email,
    password
  });
  res.json({ message: "User updated" });
};

userController.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json("User deleted");
};

module.exports = userController;
