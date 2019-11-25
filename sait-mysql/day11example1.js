const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.listen(8000, err=>{
	if (err) throw err;
	console.log("server started");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
	res.sendFile(__dirname + "/index.html");
	//res.sendFile("index.html");
});

app.get("/thanks", (req, res)=>{
	res.sendFile(__dirname + "/thanks.html");
	//res.sendFile("index.html");
});

app.post("/post_form", (req, res)=>{
	console.log(req.body);
	var fname = req.body.fname;
	var lname = req.body.lname;
	//res.end("Data received: fname=" + fname + ", lname=" + lname);
	res.redirect("/thanks");
});