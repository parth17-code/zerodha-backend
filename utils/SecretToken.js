require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.Username }, 
    process.env.TOKEN_KEY, 
    { expiresIn: 3 * 24 * 60 * 60 }
  );
};
