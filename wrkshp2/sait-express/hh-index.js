const greet = require("./hh-greet");
const express = require("express");
const server = express();
console.log(greet.randomGreeting());
server.listen(8000, ()=>{
	console.log("Server is ready on portal 8000");
});
server.get('/', (req, res)=>{
    res.send("<h1>" + greet.randomGreeting() + "</h1>");
});
server.use(express.static("views", {
	extensions: ["html", "htm"]
}));
server.use(express.static("public"));
server.use(express.static("media"));
server.use(express.static("myModules"));
server.use((req, res, next) => {
	res.status(404).send('The page you are looking for is not here');
});