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
	//console.log(req.body);
	var custFirstName = req.body.fname;
	var custLastName = req.body.lname;
	var custAddress = req.body.address;
	var custCity = req.body.city;
	var custProv = req.body.prov;
	var custPostal = req.body.postal;
	var custCountry = req.body.country;
	var custHomePhone = req.body.hphone;
	var custBusPhone = req.body.bphone;
	var custEmail = req.body.email;
	var agentId = req.body.agent;
	//res.end("Data received: fname=" + fname + ", lname=" + lname);
	res.redirect("/thanks");
});