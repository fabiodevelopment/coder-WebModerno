let array1 = ["javascript", 1, "3", "Web", 20];
let array2 = ["a", "c"]

const filtrarNumeros = (lista) => {
    let novoArray = new Array();
    for(let i=0; i <= lista.length - 1; i++) {
        if(typeof(lista[i]) == 'number') {
            novoArray.push(lista[i])
        }
    }
    console.log(novoArray);
}

filtrarNumeros(array1)
filtrarNumeros(array2)