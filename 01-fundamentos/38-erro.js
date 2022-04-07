function tratarErroElancar(erro) {
    // throw new Error('...');
    // throw 10
    // throw true
    throw 'Mensagem de erro'
    // throw {
    //     nome: erro.nome,
    //     msg: erro.message,
    //     date: new Date
    // }

}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.nome.toUpperCase() + '!!!');
    } catch(e) {
        tratarErroElancar(e);
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto' }; //erro
// const obj = { nome: 'Roberto' }; //final

imprimirNomeGritado(obj)