const {Model} = require('mongoose');
const {WatchlistSchema} = require('../Schema/WatchlistSchema');

module.exports.WatchlistModel = new Model("watchlistModel" , WatchlistSchema)