// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };



let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return yenes;
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromYenToPound(yenes) {
    let euros = yenes / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}


module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
