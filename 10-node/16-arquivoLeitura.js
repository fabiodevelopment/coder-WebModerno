const fs = require('fs')

const caminho = __dirname + '/15-arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Leitura do JSON > não requer o FS:
const config = require('./15-arquivo.json')

console.log(config.db)

//Leitura de Pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

// __dirname é uma constante que representa o caminho atual


