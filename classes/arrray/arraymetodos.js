const pilotos = ['satoro', 'vetel', 'alonso', 'massa']
pilotos.pop()//massa quebrou o carro

console.log(pilotos)

pilotos.push('Micael')
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('jorge')
console.log(pilotos)

// adicionar
pilotos.splice(3, 0, 'luiz','antonio')
console.log(pilotos)

// remover 

pilotos.splice(2, 1)
console.log(pilotos)

const algunspilotos1 = pilotos.slice(1)
console.log(algunspilotos1)


const algunspilotos2 = pilotos.slice(0, 2)
console.log(algunspilotos2)

















