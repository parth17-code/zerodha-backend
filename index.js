require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/HoldingsModel");
const {PositionsModel} = require('./models/PositionsModel');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT;
const url = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json())

app.get('/allHoldings' , async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings)
})

app.get('/allPositions' , async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions)
})

app.listen(PORT || 3003, () => {
  console.log(`App started....listening on PORT ${PORT}`);
  mongoose.connect(url);
  console.log("DB connected");
});
