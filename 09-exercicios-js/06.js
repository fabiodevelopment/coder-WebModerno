
const inverso = (entrada) => {
    if(typeof(entrada) == 'boolean' || typeof(entrada) == 'number') {
        if (typeof(entrada) == 'boolean') {
            return console.log(!entrada)
        } else {
            return console.log(-entrada)
        }
    } else {
        return console.log("Booleano ou número esperados, mas o parâmetro é do tipo "+ typeof(entrada))
    }
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")