Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: 'notebook', preco: 2478, fragil: true},
    {nome: 'ipad pro', preco: 789, fragil: true},
    {nome: 'copo de vidro', preco: 12.78, fragil: true},
    {nome: 'copo de plastico', preco: 14.59, fragil: false},
    
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))