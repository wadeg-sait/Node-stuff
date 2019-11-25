// Load HTTP module
const http = require("http");
const fs = require("fs");
const url = require("url");
const moment = require('moment');
var currentTime = new moment().format("LTS");
var currentDate = new moment().format('MMMM Do, YYYY')

const greeting = require("./randomgreet");


// Create HTTP server and listen on port 8001 for requests
http.createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "text/html"});
        response.write("<!DOCTYPE html><html><head><title>Greetings</title></head><body>");
        // don't forget the () on the end of the imported function call
        response.write("<h1>" + greeting.greet() + "</h1></body></html>");
        response.end();
}).listen(8001, ()=> console.log("Server started " + currentDate + " at " + currentTime));

