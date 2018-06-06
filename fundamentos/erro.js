function tratarErroElancar(erro) {
    //throw new Errror('!!!!')
   //throw 10
  //hrow 'ocorreu um erro '
  throw 'erro 310 '
}


//aula importante para erros try, catch, throw,finally 



function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('final')
    }

}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)