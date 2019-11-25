// Load HTTP module
const http = require("http");
const fs= require("fs");
var moment = require('moment');

// Create HTTP server and listen on port 8000 for requests
http.createServer((request, response) => {
    fs.readFile("404.html", (err, data)=> {
        response.writeHead(200, { "Content-Type":"text/html" });
        
        // Write the data that we read from "demo.html".
        response.write(data);
        response.end();
    });
}).listen(8000);

console.log(moment().format('MMMM DD, YYYY'));