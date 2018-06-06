//novo recursso do ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua abc',
        numero: 1200
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { endereco: {logradouro, numero, cep }} = pessoa
console.log( logradouro, numero,cep)