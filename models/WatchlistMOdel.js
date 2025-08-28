const {model} = require('mongoose');
const {WatchlistSchema} = require('../Schema/WatchlistSchema');

module.exports.WatchlistModel = new model("watchlistModel" , WatchlistSchema)