const mongoose = require('mongoose');

module.exports.OrdersSchema = new mongoose.Schema({
    name : String,
    qty : Number,
    price : Number,
    mode : String,
})