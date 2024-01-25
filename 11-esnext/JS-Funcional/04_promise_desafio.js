// EXEMPLO AULA CALLBACK

// const fs = require('fs')
// const path = require('path')

// const caminho = path.join(__dirname, 'dados.txt')

// function exibirConteudo(_, conteudo) {
//     console.log(conteudo.toString())
// }

// fs.readFile(caminho, exibirConteudo)

// -----------------------------------------------------

// DESAFIO

// const fs = require('fs')
// const path = require('path')

// function filePrint(fileName) {
//     const filePath = path.join(__dirname, `/${fileName}`)
//     return new Promise(resolve => {
//         fs.readFile(filePath, function(_, fileData) {
//             resolve(fileData.toString())
//         })
//     })
// }

// filePrint('dados.txt')
//     .then(fileData => console.log(fileData))

// -----------------------------------------------------

// RESPOSTA

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)