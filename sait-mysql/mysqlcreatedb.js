// instantiate the MySQl Connector/Driver
const mysql = require("mysql");

// initialize the DB object, no DB defined as we are creating it
var conn = mysql.createConnection({
    host: "localhost",
    user: "843722",
    password: "password"
});

// connect to the DB server
conn.connect((err) => {
    // throw an err if we can't connect
    if (err) throw err;
    // log that we connected
    console.log("Connection established");
    // create a new DB called stuff
    conn.query("CREATE DATABASE stuff", (err, result)=>{
        // throw an error if we can't perform the operation
        if(err) throw err;
        //otherwise log that we created the DB
        console.log("Create DB results: " + result);
        //close the DB connection
        conn.end(err=>{
            if(err) throw err;
            console.log("Connection closed");
        });
    });

});