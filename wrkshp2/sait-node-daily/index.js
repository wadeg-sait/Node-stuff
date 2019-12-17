// Load HTTP module
const http = require("http");
const fs = require("fs");
const url = require("url");
const moment = require('moment');
var currentTime = new moment().format("LTS");
var currentDate = new moment().format('MMMM Do, YYYY')

// Create HTTP server and listen on port 8000 for requests
http.createServer((request, response) => {
    let parsedAddress = url.parse(request.url, true);
    let file = "." + parsedAddress.pathname;
    fs.readFile(file, (err, data) => {
        if (err) {
            fs.readFile("404.html", (err, errFile) => {
                response.writeHead(404, { "Content-Type": "text/html"});
                response.write(errFile);
                return response.end();
            });
    
        }
        else{
        response.writeHead(200, { "Content-Type": "text/html"});
        response.write(data);
        return response.end();
        }
    });
}).listen(8000, ()=> console.log("Server started " + currentDate + " at " + currentTime));

