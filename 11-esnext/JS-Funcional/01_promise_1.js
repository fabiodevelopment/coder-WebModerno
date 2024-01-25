let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

console.log(typeof Promise)
console.log(typeof p)

// p.then(function(valor) {
//     console.log(valor)
// })

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))


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

