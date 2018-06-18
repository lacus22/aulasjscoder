// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', Preco: 1.98, tag: 'promoção'
})


console.log('Extensível:', Object.isExtensible(produto))


produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca '
delete produto.tag
console.log(produto)

// Object.seal

const pessoa = {nome: 'Julia', idade: 34}
Object.seal(pessoa)

console.log('selado', Object.isSealed(pessoa))
pessoa.sobrenome = 'tiba'
delete pessoa.nome
pessoa.idade = 23

console.log(pessoa)


//Object.freeze!!!

