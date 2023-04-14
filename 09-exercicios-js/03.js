function calcularSalario(horasTrabalhadas, valorHora) {
    const salario = horasTrabalhadas * valorHora;
    return console.log("Salário igual a R$ "+salario);
}

calcularSalario(150, 40.5);