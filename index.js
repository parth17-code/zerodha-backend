require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const authRoute = require("./Routes/authRoute");

const app = express();

const PORT = process.env.PORT;
const url = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let Order = await new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  Order.save();
  res.json(Order);
});

app.listen(PORT || 3003, () => {
  console.log(`App started....listening on PORT ${PORT}`);
  mongoose.connect(url);
  console.log("DB connected");
});
