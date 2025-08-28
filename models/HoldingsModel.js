const {HoldingsSchema} = require('../Schema/HoldingsSchema');

const {model} = require('mongoose');

const HoldingsModel = new model("holdingsModel" , HoldingsSchema);

module.exports = {HoldingsModel};