const express = require("express");
const mongoose = require("mongoose");
const mongo = "mongodb://localhost:27017/definitions"
const app= express();
const PORT = 8000;
const moment = require('moment');
const greeting = require("./randomgreet");
var currentTime = new moment().format("LTS");
var currentDate = new moment().format('MMMM Do, YYYY')


app.use(express.urlencoded({extended: true}));

mongoose.connect(mongo,{useUnifiedTopology: true, useNewUrlParser: true} );

const db = mongoose.connection;

db.on("error",console.error.bind(console, "connection error"));

db.once("open", ()=>{
    console.log("DB Open");
});

app.get("/",(req,res)=>{
    res.sendFile("index.html");
});

app.listen(PORT, ()=> {
    console.log( greeting.greet() + ": Server started " + currentDate + " at " + currentTime + " on port: " + PORT);
});
