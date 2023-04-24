const contadorA = require('./07-instanciaUnica')
const contadorB = require('./07-instanciaUnica')

const contadorC = require('./08-instanciaNova')()
const contadorD = require('./08-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)