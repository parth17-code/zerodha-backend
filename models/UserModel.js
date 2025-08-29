const {model} = require('mongoose');
const {UserLogInSchema , UserRegisterSchema} = require('../Schema/UserSchema')

module.exports.UserLogInModel = new model('userLogInModel' , UserLogInSchema);
module.exports.UserRegisterModel = new model('userRegisterModel' , UserRegisterSchema);