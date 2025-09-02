const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

UserRegisterSchema = new mongoose.Schema({
    Username : {
        type:String,
        required: [true , "Your username is required"]
    },
    email : {
        type:String,
        required: [true , "Your email is required"]
    },
    password : {
        type:String,
        required: [true , "Please set your password"]
    }
})

UserRegisterSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = {UserRegisterSchema:UserRegisterSchema}

