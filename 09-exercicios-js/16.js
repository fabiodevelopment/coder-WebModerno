
const checarAnoBissexto = (ano) => {

    console.log(ano % 100 != 0 && ano % 4 == 0 || ano % 400 == 0) 

}

checarAnoBissexto(2020);
checarAnoBissexto(2100);
