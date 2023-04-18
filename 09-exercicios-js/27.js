const obj1 = {a:1, b:2, c:3};

const inverter = (objeto) => {

    console.log('objeto', objeto)

    /* Option 1
        let objetoInvertido = {}

        Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0,
                valor = 1 

            objetoInvertido[parChaveValor[parseInt(valor)]] = parChaveValor[chave]
        })
        return console.log(objetoInvertido)
    */
    const paresDeChaveValorInvertidos = Object.entries(objeto)
            .map(parChaveValor => parChaveValor.reverse())

    return Object.fromEntries(paresDeChaveValorInvertidos)
            

}

inverter( obj1 );