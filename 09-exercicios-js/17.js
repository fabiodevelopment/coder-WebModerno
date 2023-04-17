
const somarNumeros = (lista) => {
    let total = 0;
    for(let i=0; i < lista.length; i++) {
        total += lista[i];
    }
    console.log(total);

}

somarNumeros([10, 10, 10]);
somarNumeros([15, 15, 15, 15]);