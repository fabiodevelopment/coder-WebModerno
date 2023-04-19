// const moduloA = require('/home/biones/Cursos/Udemy/web-moderno/10-node/01-moduloA.js')
// const moduloA = require('../../01-moduloAB')
const moduloA = require('../../01-moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)