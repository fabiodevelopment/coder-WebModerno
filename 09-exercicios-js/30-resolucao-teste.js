
const receberMelhorEstudante = (notas) => {
    // let mediaDosAlunos = {};
    let notasDaClasse = Object.entries(notas)
    let rankingClasse = []

    notasDaClasse.forEach((aluno,i) => {
        let alunoNome = aluno[0];
        let alunoNotas = aluno[1];
       
        let soma = alunoNotas.reduce((soma, i)=> {
            return (soma + i) ;
        })
        let media = soma / 4
        
        let alunoMedia = new Object;
        alunoMedia.nome = alunoNome;
        alunoMedia.media = media;
        rankingClasse.push(alunoMedia);
    })
    console.log(rankingClasse);

    const estudantesOrdenados = rankingClasse.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]
    return console.log('melhorEstudante', melhorEstudante)

}

receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
})