// içamento escopo global
console.log('a =', a)
var a = 2
console.log('a =', a)

// içamento escopo de função
function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste()

//Hoisting com Let não acontece
console.log('b =', b)
let b = 2
console.log('b =', b)