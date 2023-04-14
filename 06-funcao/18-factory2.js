//Factory com parametros

function criarPessoa(nome, sobrenome, desconto = 10) {
    return {
        nome: `${nome}`,
        sobrenome: `${sobrenome}`,
        desconto: `${desconto}`
    }
}

console.log(criarPessoa('Fabio', 'Haddad', 20))

// Exemplo professor

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))