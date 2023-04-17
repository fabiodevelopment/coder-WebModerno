
const calcularMedia = (lista) => {
    let qtde = lista.length;
    // console.log(qtde);
    let total = lista
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)
    // console.log(total)
    return console.log(total / qtde)
}

calcularMedia([0, 10]);
calcularMedia([1,2,3,4,5]);