// Load currency module
const currency = require("./currency");

// Use functions from currency module
console.log(`100 Canadian dollars equals ${currency.canadianToUS(100)} US dollars.`);
console.log(`100 US dollars equals ${currency.USToCanadian(100)} Canadian dollars.`);
console.log(`100 Canadian dollars equals ${currency.canadianToGBP(100)} GBP.`);
