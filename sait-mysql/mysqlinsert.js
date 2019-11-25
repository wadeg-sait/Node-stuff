// instantiate the MySQl Connector/Driver
const mysql = require("mysql");

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

    var data = ["Fred","Smith","123 Main Street","Calgary","AB","T2M0L4","CA","403-555-5555","","fred@home.org",7];
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