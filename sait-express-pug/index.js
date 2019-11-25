/*
  meta(name='author' content='Wade Grimm')
  meta(name='course' content='CPRG210')
  meta(name='date' content='November 23, 2019')

*/
const express=require("express");
const app=express();
const path =require("path");
const moment = require('moment');
const greeting = require("./randomgreet");
var currentTime = new moment().format("LTS");
var currentDate = new moment().format('MMMM Do, YYYY')
const PORT = 8000;
var bodyParser = require("body-parser");

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.listen(PORT, ()=> {
    console.log( greeting.greet() + ": Server started " + currentDate + " at " + currentTime + " on port: " + PORT);
});

