
const sortear = (numero) => {
    const min = 1;
    const max = 10;
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // console.log('numeroSorteado', numeroSorteado);
    // console.log('numero', numero);

    if(numero === numeroSorteado) {
        return console.log("Parabéns! O numero sorteado foi o "+numeroSorteado);
    } else {
        return console.log("Que pena! O numero sorteado foi o "+numeroSorteado);
    }

}

sortear(10);
sortear(5);
sortear(5);