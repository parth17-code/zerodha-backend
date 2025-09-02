const jwt = require("jsonwebtoken");

module.exports.VerifyUser = (req, res) => {
    console.log("VerifyToken hit!")
  const token = req.cookies.token;
  console.log(token)
  if (!token) return res.json({ status: false });
  
  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    console.log("Token exists")
    if (err) return res.json({ status: false });
    console.log("Token Verified")
    return res.json({ status: true, user: {
        id : decoded.id,
        email : decoded.email,
        name : decoded.name,
    }});
  });
};
