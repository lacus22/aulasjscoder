function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}


const produto = {
    nome: 'notbook',
    preco: 4675,
    desc: 0.16,
    getPreco
}


global.preco = 20
global.desc = 0.2
console.log(getPreco())
console.log(produto.getPreco())


const carro = { preco: 3987, desc: 0.19 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.12, '$'))
console.log(getPreco.apply(carro, [0.13, '$']))








