
const receberPrimeiroEUltimoElemento = (lista) => {
    let novaLista = []
    novaLista.push(lista[0]);
    novaLista.push(lista[lista.length-1])
    console.log(novaLista)
}

receberPrimeiroEUltimoElemento([7, 14, "Olá"])
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])