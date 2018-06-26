const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1278.90,
    desconto: 0.28
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo')
})