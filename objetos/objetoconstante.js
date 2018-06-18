const pessoa = {nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)


//pessoa = { nome: 'ana'}
//console.log(nome)

Object.freeze(pessoa)

pessoa.nome = 'mario'
console.log(pessoa.nome)