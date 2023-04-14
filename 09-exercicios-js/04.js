const mesNome = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "dezembro"];

function nomeDoMes(mesNumero) {
    const mesResultado = mesNome[mesNumero-1];
    if (mesNumero >= 1 && mesNumero <= 12) {
        return mesResultado;
    } else {
        console.log("O numero precisa ser entre 1 e 12");
    }
}

console.log(nomeDoMes(1));
console.log(nomeDoMes(4));

console.log(nomeDoMes(0));
console.log(nomeDoMes(13));