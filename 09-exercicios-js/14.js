
let obj1 = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
};
let obj2 = {
    codigo: 11111,
    preco: 12000
};

const objetoParaArray = (objeto) => {
    let array = [];

    // array = Object.entries(objeto)

    for(let key in objeto) {
        array.push([key, objeto[key]]);
    }


    return console.log(array);
}

objetoParaArray(obj1);
objetoParaArray(obj2);
