const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/newdb";

mongo.connect(url, {
    useUnifiedTopology: true
}, (err, conn) => {
    if (err) throw err;
    console.log("Connected");
    var dbo = conn.db("newdb");
    dbo.createCollection("products", (err, result) => {
        if (err) throw err;
        console.log("Collection created");
        console.log(result);
        conn.close();
    });

});