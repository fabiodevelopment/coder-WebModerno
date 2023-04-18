const array1 = ["programação", "mobile", "profissional"];
const array2 = ["javascript", "java", "c++"];

const buscarPalavras = (busca, palavras) => {
    let resultado = []

    for(let palavra of palavras) {
        // console.log(palavra.includes(busca))
        if(palavra.includes(busca)) {
            resultado.push(palavra)
        }        
    }
    return console.log(resultado)
}

buscarPalavras("pro", array1);
buscarPalavras("python", array2);
buscarPalavras("jav", array2);