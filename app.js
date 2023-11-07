// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollartoYen(dollar) {
    return dollar * (oneEuroIs.JPY / oneEuroIs.USD);
}

function fromEuroToDollar(euro) {
    return dollar * oneEuroIs.USD;
}

function fromYenToPound(yen) {
    return dollar * (oneEuroIs.GBP / oneEuroIs.JPY)
}

module.exports = {fromEuroToDollar};
