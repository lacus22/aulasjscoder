const notas = [9.1, 3.4, 7.8, 2.0, 9.9]
 for(let i in notas){
     console.log(i,notas[i])
 }

 const pessoa = {
     nome: 'Ana',
     sobrenome: 'Silva',
     idade: 29,
     peso: 64
 }

 for(let atributo in pessoa) {
     console.log(`${atributo} = ${pessoa[atributo]}`)
 }

 