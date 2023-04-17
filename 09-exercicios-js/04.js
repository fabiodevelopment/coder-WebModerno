const mesNome = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "dezembro"];

function nomeDoMes(mesNumero) {
    const mesResultado = mesNome[mesNumero-1];
    if (mesNumero >= 1 && mesNumero <= 12) {
        return console.log(mesResultado);
    } else {
        console.log("O numero precisa ser entre 1 e 12");
    }
}

nomeDoMes(1);
nomeDoMes(4);

nomeDoMes(0);
nomeDoMes(13);