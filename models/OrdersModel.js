const {model} = require('mongoose');
const {OrdersSchema} = require('../Schema/OrdersSchema');

module.exports.OrdersModel = new model("ordersModel" , OrdersSchema);