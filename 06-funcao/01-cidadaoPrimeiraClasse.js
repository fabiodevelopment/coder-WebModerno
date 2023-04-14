//Função em JS é First-Class Object (Citizens)
//High Order Function

//criar de forma literal
function fun1(texto) { 
    return texto
}

//Armazenar em uma variavel
const fun2 = function (t) {
    console.log(t)
 }

//Armazenar em um array
const array = [function (a,b) { return a + b }, fun1, fun2]
console.log(array[0](1,9))

//Armazenar em um Objeto
const obj = { }
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// passar função como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

//Uma função pode retornar/conter uma Função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) 

const cincoMais = soma(2, 3)
cincoMais(5)