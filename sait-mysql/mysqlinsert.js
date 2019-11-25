// instantiate the MySQl Connector/Driver
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

var data = [];

const app = express();
app.listen(8000, err => {
    if (err) throw err;
    console.log("server started");
});

app.use(express.static("views", { extensions: ["html"] }));
app.use(express.static("public"));
app.use(express.static("img"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/day11example1.html");
   // res.sendFile("day11example1.html");
});

app.get("/thanks", (req, res) => {
    res.sendFile(__dirname + "/thanks.html");
    //res.sendFile("index.html");
});

app.post("/post_form", (req, res) => {
    //console.log(req.body);

    data[0] = req.body.fname;
    data[1] = req.body.lname;
    data[2] = req.body.address;
    data[3] = req.body.city;
    data[4] = req.body.prov;
    data[5] = req.body.postal;
    data[6] = req.body.country;
    data[7] = req.body.hphone;
    data[8] = req.body.bphone;
    data[9] = req.body.email;
    data[10] = req.body.agent;

    // initialize the DB object, no DB defined as we are creating it
    var conn = mysql.createConnection({
        host: "localhost",
        user: "843722",
        password: "password",
        database: "travelexperts"
    });

    // connect to the DB server
    conn.connect((err) => {
        // throw an err if we can't connect
        if (err) throw err;
        // log that we connected
        console.log("Connection established");

         var sql = "INSERT INTO `customers`(`CustFirstName`, `CustLastName`, `CustAddress`, `CustCity`," +
           "`CustProv`,`CustPostal`, `CustCountry`, `CustHomePhone`, `CustBusPhone`, `CustEmail`, `AgentId`)" +
         "VALUES (?,?,?,?,?,?,?,?,?,?,?)";

        // Get some results from the customers table
        conn.query(sql, data, (err, result, fields) => {
            // throw an error if we can't perform the operation
            if (err) throw err;
            //Show the returned info
            console.log(result);
            //close the DB connection
            conn.end(err => {
                if (err) throw err;
                console.log("Connection closed");
            });
        });

    });
    //res.end("Data received: fname=" + fname + ", lname=" + lname);
    res.redirect("/thanks");
});