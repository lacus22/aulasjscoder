// let e const

{
    var a = 2
    var b = 3
    console.log(b)
}

console.log(a)


// template string

const produto = 'ipad'
console.log(`${produto} é caro `) 


// destructuring

const [ l, e, ...tras] = "cod3r"
console.log(l, e,  tras) 


// arrow function


const soma = (a, b) => a + b
console.log(soma(3, 4))



// arrow function (this)


const lexicol1 = () => console.log(this === exports)
lexicol1()


// parametro default

function log(texto = 'Node'){
    console.log (texto)
}
log()
log('Sou mais forte')

// operador rest
  
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n )
    return total
}

console.log(total(2, 4, 6, 9 ))


/// revisao tres
// es8 Object.values/Object.entries


const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))


//melhorias na notação literal

const name = 'Carla'
const pessoa = {
    name,
    ola() {
        return 'oi gente!!'
    }
}

console.log(pessoa.name, pessoa.ola())

// class

class animal  {}
class cachorro extends animal {
    falar(){
        return 'au au '
    }
}

console.log(new cachorro().falar())


// operador rest spread

const funcionario = { nome: 'Pedro', salario: 3890 }
const clone = { ativo: true, ...funcionario}

console.log(clone)
console.log(funcionario)


const grupo =  [ 'pedro', 'paulo', 'genesio']
const grupo2 = [ 'maria', 'cleusa', ...grupo]

console.log(grupo2)


// tag de template 

// processa o template dentro de uma função


function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra string'

}
const aluno = 'gui'
const situacao = 'aprovado'
console.log (tag `${aluno} esta ${situacao}.`)


// tag de template real 


function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)

    })
    return resultado.join('')
} 


const preco = 39.9
const precoParcelado = 45

console.log(`1x de ${preco} ou 3x de ${precoParcelado}.`)


// map maior flexibilidade 

const tecnologia = new Map()
tecnologia.set('react', { framework: false})
tecnologia.set('angular', {framework: true})

console.log(tecnologia.react)
console.log(tecnologia.get('react').framework)


const chavesVariadas = new Map([
    [function (){ }, 'funcao'],
    [{}, 'Objeto'],
    [123, 'numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)


//set nao aceita repetição / não indexada

const times = new Set()
times.add('vasco')
times.add('São paulo').add('Flamengo').add('corintias')
times.add('Cruzeiro')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('vasco')
console.log(times.has('vasco'))


const nomes = [ 'raquel', 'pedro', 'marcio', 'pedro']
const nomeSet = new Set(nomes)
console.log(nomeSet)

// for Of  


for (let letra of "Cod3er") {
    console.log(letra)
}

const assuntosEcma = [ 'map', 'set','promisse']

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

for (let assunto of assuntosEcma){
    console.log(assunto)
}

for (let chave of assuntosEcma.keys()){
    console.log(chave)
}

for (let [ ch, vl] of assuntosEcma.entries()){
    console.log(ch, vl)
}







































































































