//usando a notação literal

const obj1 = {}
console.log(obj1)

// Object em js 

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funçòes construtora

function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 4.98, 0.16)
const p2 = new Produto('Notebook', 2678.98, 0.74)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory


function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('jonas', 2876, 6)
const f2 = criarFuncionario('maria', 1896, 2)
console.log(f1.getSalario(),f2.getSalario())

// Object.creat

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// um função famosa que retorna Objeto..
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)























