const {UserRegisterModel , UserLogInModel} = require("../models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  console.log("Hi")
  try {
    const { Username, email, password,createdAt } = req.body;
    const existingUser = await UserRegisterModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UserRegisterModel.create({Username, email, password, createdAt });
    const token = createSecretToken(user);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
    });

    return res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user});
  } catch (error) {
    console.error(error);
    return res.status(500).json({message:"Server error"})
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await UserRegisterModel.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    } 
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user);
      res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     })
     return res.status(201).json({ message: "User logged in successfully", success: true});
  } catch (error) {
    console.error(error);
     return res.status(500).json({message:"Server error"})
  }
}

module.exports.Logout = async(req,res)=>{
   res.clearCookie("token", {
    httpOnly: true,
    secure: true, 
    sameSite: "none", 
  });
  res.json({ success: true, message: "Logged out successfully" });
}