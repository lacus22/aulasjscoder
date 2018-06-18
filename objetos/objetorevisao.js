//coleção de chaves e valor


const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log (produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)





const carro = {
    modelo: 'bb',
    valor: 4578,
    proprietario: {
        nome: 'Paulo',
        idade: 43,
        endereco:{
            logradouro: 'rua dos lmirantes',
            numero: 389
        }

    },
    condutores:[{
        nome: 'pedro',
        idade: 34
    },{
        nome: 'Ana',
        idade: 34
    }],
    calcularValordoseguro: function(){

    }
}

carro.proprietario.endereco.numero = 994
console.log(carro)
delete carro.condutores.idade
delete carro.proprietario.nome
console.log(carro)