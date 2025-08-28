const {HoldingsSchema} = require('../Schema/HoldingsSchema');

const {Model} = require('mongoose');

const HoldingsModel = new Model("holdingsModel" , HoldingsSchema);

module.exports = {HoldingsModel};