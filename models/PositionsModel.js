const {model} = require('mongoose');
const {PositionsSchema} = require('../Schema/PositionsSchema');

module.exports.PositionsModel = new model("positionsModel" , PositionsSchema);