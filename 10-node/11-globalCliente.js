require('./10-global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita ... trocou o valor do atributo no obj global'

console.log(MinhaApp.nome) //Object.freeze conjelou o obj