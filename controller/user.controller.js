const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync("123", salt);
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res
        .status(400)
        .json({ message: "Please enter email, username and password" });
    }

    let hashedPassword;
    try {
      const salt = bcrypt.genSaltSync(10);
      hashedPassword = bcrypt.hashSync(password, salt);

      console.log("successfully hashed password: ", hashedPassword);
    } catch (error) {
      console.log("error generating salt: ", error.message);
    }

    const newUser = User.create({
      email,
      username,
      password: hashedPassword,
    });

    res.status(200).json({ message: "User created Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" });
  }
};

const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found. Please Sign Up First" });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is not correct" });
    }

    const { password, ...others } = user._doc;
    res.status(200).json({ user: others });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { register, signin };
