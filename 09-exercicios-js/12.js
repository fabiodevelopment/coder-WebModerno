const obj1 = {a:1, b:2}
const obj2 = {
    id: 20,
    nome: "caneta",
    descricao: "não preenchido"
}

const removerPropriedade = (objeto, propriedade) => {
    const novoObjeto = Object.assign({}, objeto);
    delete novoObjeto[propriedade];
    return console.log(novoObjeto);
}

removerPropriedade(obj1, "a");
removerPropriedade(obj2, "descricao");

Object.is(removerPropriedade(obj1, "a"), obj1)
Object.is(removerPropriedade(obj2, "descricao"), obj2)