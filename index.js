require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT;
const url = process.env.MONGO_URL;

app.listen(PORT || 3003 , ()=>{
    console.log(`App started....listening on PORT ${PORT}`)
    mongoose.connect(url);
    console.log("DB connected")
})