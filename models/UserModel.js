const {model} = require('mongoose');
const {UserRegisterSchema} = require('../Schema/UserSchema')

module.exports.UserRegisterModel = new model('userRegisterModel' , UserRegisterSchema);