
const estaEntre = (numero, minimo, maximo, inclusivo) => {
    if (inclusivo == null) {
        // console.log('Não é inclusivo');
        if(minimo < numero && numero < maximo) {
            return console.log(true);
        }
        return console.log(false);
    } else {
        // console.log('é inclusivo');
        if(minimo <= numero && numero <= maximo) {
            return console.log(true)
        }
        return console.log(false)
    }
}

estaEntre(10, 50, 100)
estaEntre(16, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)