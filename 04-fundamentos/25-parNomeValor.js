// par nome/valor
const saudacao = 'Opa'; //contexto lexico 1

function exec() {
    const saudacao = 'Falaaa'; //contexto lexico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(Cliente);