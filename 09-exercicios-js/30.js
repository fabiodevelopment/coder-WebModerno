const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0);
const media = array => soma(array) / array.length ;

const receberMelhorEstudante = (estudantes) => {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        const chave = 0;
        const valor = 1;

        return { nome: estudante[chave], media: media(estudante[valor])}
    })
    console.log(estudantesComMedias)

    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]
    return console.log('melhorEstudante', melhorEstudante)
}



receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
})