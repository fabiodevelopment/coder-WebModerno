
const repetir = (valor, numero) => {
    let lista = [];

    // for(let i = 1; i <= numero; i++) {
    //     lista.push(valor);
    // }

    lista = Array(numero).fill(valor);
    console.log(lista);
}

repetir("código", 2)
repetir(7, 3)
