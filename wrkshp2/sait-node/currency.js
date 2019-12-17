const canadianDollar=0.76;
const currGBP=0.58;
function roundTwo(amount) {
    return Math.round(amount *100)/100;
}

exports.canadianToUS = canadian => roundTwo(canadian * canadianDollar);
exports.USToCanadian = us => roundTwo(us / canadianDollar);
exports.canadianToGBP = gbp => roundTwo(currGBP * gbp);