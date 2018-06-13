function crriarProduto(nome, preco){
    return{
       nome,
       preco,
       desconto: 0.1
    }
}
console.log(crriarProduto('notebook', 2934.27))
console.log(crriarProduto('Ipad', 1098))
console.log(crriarProduto('Iphone', 2934.27))


