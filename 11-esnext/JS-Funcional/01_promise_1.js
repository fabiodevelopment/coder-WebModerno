
function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

function converterMinuscula(letra) {
    return letra.toLowerCase()
}

function imprimeConsole(resultado) {
    return console.log(resultado)
}

new Promise(function(resolve) {
    resolve(['Fabio', 'Iris', 'Vanessa', 'Regiane'])
}) 
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(converterMinuscula)
    .then(imprimeConsole)

