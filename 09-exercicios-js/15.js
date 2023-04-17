
let array1 = [1, 2, 3, 4];
let array2 = [10, 70, 22, 43];

const valorIndicePar = (lista) => {
    let novoArray = new Array();
    for(let i=0; i < lista.length; i += 2) {
        if(lista[i] % 2 == 0) {
            novoArray.push(lista[i])
        }
    }
    console.log(novoArray);
}

valorIndicePar(array1);
valorIndicePar(array2);