// ES8: Object.velues/Object.entries

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

console.log(Object.keys(obj)) // ja existia

// Melhorias na Notação Literal

const nome = 'Carla'

const pessoa = {
    nome,
    ola () {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// versões anteriores
const person = {
    nome: nome,
    hello: function() {
        return 'Hello!'
    }
}
console.log(person.nome, person.hello())

// Class

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())
