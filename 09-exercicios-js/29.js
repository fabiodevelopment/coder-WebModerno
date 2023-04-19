
const array1 = [12, 16, 1, 5];
const array2 = [8, 4, 5, 6];

const segundoMaior = (numeros) => {

    const arrayDecrescente = numeros.sort((a,b) => b - a)

    return console.log(arrayDecrescente[1])
}

segundoMaior(array1);
segundoMaior(array2);