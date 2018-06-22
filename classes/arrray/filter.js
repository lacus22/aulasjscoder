const produtos = [
    {nome: 'notebook', preco: 2478, fragil: true},
    {nome: 'ipad pro', preco: 789, fragil: true},
    {nome: 'copo de vidro', preco: 12.78, fragil: true},
    {nome: 'copo de plastico', preco: 14.59, fragil: false},
    
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))