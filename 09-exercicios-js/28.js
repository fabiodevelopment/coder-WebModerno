const array1 = [38, 2, 365, 10, 125, 11]
const array2 = [5, 9, 1, 125, 11]

const filtrarPorQuantidadeDeDigitos = (numeros, quantidadeDesejada) => {
    
    const resposta = numeros.filter( numero => {
        const quantidadeDeDigitos = String(numero).length
        
        return quantidadeDeDigitos === quantidadeDesejada
        
    })
    
    return console.log(resposta)
}

filtrarPorQuantidadeDeDigitos(array1, 2);
filtrarPorQuantidadeDeDigitos(array2, 1);