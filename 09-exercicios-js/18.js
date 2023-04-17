
let produtos1 = [
    {
        nome: "Jornal online",
        categoria: "informação",
        preco: 89.99
    },
    {
        nome: "Cinema",
        categoria: "Entretenimento",
        preco: 150
    }
];

let produtos2 = [
    {
        nome: "Galaxy S20",
        categoria: "Eletrônicos",
        preco: 3599.99
    },
    {
        nome: "Macbook Pro",
        categoria: "Eletrônicos",
        preco: 30999.90
    }
];

const despesasTotais = (listaProdutos) => {
    let total = 0;
    
    // for(let i = 0; i < listaProdutos.length; i++) {
    //     // console.log(listaProdutos[i].preco);
    //     total += listaProdutos[i].preco;
    // }
    
    // for(let produto of listaProdutos) {
    //     total += produto.preco;
    // }

    total = listaProdutos
    .map(item => item.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual);

    return console.log(total);
}

despesasTotais(produtos1);
despesasTotais(produtos2);
