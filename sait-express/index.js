const express=require("express");
const app=express();
const moment = require('moment');
const greeting = require("./randomgreet");
var currentTime = new moment().format("LTS");
var currentDate = new moment().format('MMMM Do, YYYY')
const PORT = 8000;
var bodyParser = require("body-parser");



app.listen(PORT, ()=> {
    console.log( greeting.greet() + ": Server started " + currentDate + " at " + currentTime + " on port: " + PORT);
});

/*app.get('/', (req, res)=>{
    res.send("<h1>" + greeting.greet() + "</h1>");
}); */
app.use(express.static("views", { extensions: ["html"] }));
app.use(express.static("public"));
app.use(express.static("img"));

app.use(bodyParser.urlencoded({extended: true}));

app.post('/create-post', (req, res)=>{
    //res.send("<h1>" + greeting.greet() + "</h1>");
    console.log(req.body);
    var fname = req.body.fname;
    var blogpost = req.body.blogpost;
    // res.end("Data Received:  fname = %s, blogpost = %s", fname, blogpost);
    res.end("Data Received:  fname = " +fname+ " blogpost = " +blogpost);

});


app.use((req, res, next) => {
    res.status(404).send ("<p></br><h1>I’m sorry Dave, I’m afraid I can’t do that...</h1></p>");
});