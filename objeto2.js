console.log(typeof Object)
console.log(typeof new Object)


const Cliente = function (){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())

//par nome /valor
 
const saudacao = 'opa'//contexto léxico 1
function exec(){
    const saudacao = 'falaa'
    return saudacao
}
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 89,
    endereco: {
        logradouro:'rua muito legal',
        numero: 123
    }
}




console.log(saudacao)
console.log(exec())
console.log(cliente)







