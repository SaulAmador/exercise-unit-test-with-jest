

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen(dollars) {
    const exchangeRateYen = oneEuroIs["JPY"] / oneEuroIs["USD"];
    const amountInYen = dollars * exchangeRateYen;
    return amountInYen;
}


function fromYenToPound(yen) {
    const exchangeRatePound = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    const amountInPound = yen * exchangeRatePound;
    return amountInPound;
}


console.log(fromDollarToYen(100)); 
console.log(fromYenToPound(5000)); 
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }


console.log("hello world")