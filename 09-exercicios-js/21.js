let array1 = [10, 5, 35, 65];
let array2 = [5, -15, 50, 3];

const menorNumero = (lista) => {
    let menor = lista[0];
    
    // for(let i = 1; i < lista.length; i++) {
    //     let numero = lista[i];
    //     if (numero < menor) {
    //         menor = numero;
    //     }
    // }

    for(let i in lista) {
        if(lista[i] < menor) {
            menor = lista[i]
        }
    }
    
    return console.log(menor)
}

menorNumero(array1);
menorNumero(array2);
