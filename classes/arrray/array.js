// console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = [ ' joão', 'carlos', 'pedro']
console.log(aprovados[0])

aprovados[3] = 'paulo'
aprovados.push('mariza')
console.log(aprovados.length)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)
delete aprovados[2]
console.log(aprovados)
aprovados.splice(1, 2, 'joe', 'jhon', 'elemento3' )
console.log(aprovados)