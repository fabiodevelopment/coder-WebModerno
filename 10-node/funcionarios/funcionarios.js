const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres      = funcionario => funcionario.genero === 'F'
const chineses      = funcionario => funcionario.pais === 'China'
const menorSalario  = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then( response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    
    //mulher chinesa com menor salario
    
    const funcionariosFiltrado = funcionarios.filter(mulheres).filter(chineses)
    // const funcionariosMenorSalario = funcionariosFiltrado.sort((funcionarioA, funcionarioB) => funcionarioA.salario - funcionarioB.salario ) 
    // const fincionariaChinesaComMenorSalario =  funcionariosMenorSalario[0]

    const fincionariaChinesaComMenorSalario =  funcionariosFiltrado.reduce(menorSalario)
    
    console.log(fincionariaChinesaComMenorSalario)
})



// const filtrarGenero = 