const mongoose = require('mongoose');

module.exports.HoldingsSchema = new mongoose.Schema({
    name : String,
    qty : Number,
    avg : Number,
    price : Number,
    net : String,
    day : String,
})