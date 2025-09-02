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
const verifyRoute = require('./Routes/veriRoute')

const app = express();

const PORT = process.env.PORT;
const url = process.env.MONGO_URL;

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"], 
  credentials: true, 
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", authRoute);

app.use("/user" , verifyRoute)

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let Order = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await Order.save();
  res.json(Order);
});

app.listen(PORT || 3003, async() => {
  console.log(`App started....listening on PORT ${PORT}`);
  mongoose.connect(url);
  console.log("DB connected");
});
