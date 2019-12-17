const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/newdb";

mongo.connect(url, {
    useUnifiedTopology: true
}, (err, conn) => {
    if (err) throw err;
    console.log("Connected");
    var dbo = conn.db("newdb");
    var mydoc = {productId: 1,productName: "Widget"};
    dbo.collection("products").insertOne(mydoc, (err, result) => {
        if (err) throw err;
        console.log("Collection updated");
        console.log(result);
        conn.close();
    });

});