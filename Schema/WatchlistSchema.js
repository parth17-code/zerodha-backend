const mongoose = require('mongoose');

module.exports.WatchlistSchema = new mongoose.Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})