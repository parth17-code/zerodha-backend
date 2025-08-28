const {Model} = require('mongoose');
const {PositionsSchema} = require('../Schema/PositionsSchema');

module.exports.PositionsModel = new Model("positionsModel" , PositionsSchema0);