const {Model} = require('mongoose');
const {OrdersSchema} = require('../Schema/OrdersSchema');

module.exports.OrdersModel = new Model("ordersModel" , OrdersSchema);