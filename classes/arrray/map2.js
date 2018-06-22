const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "caderno", "preco": 13.95 }',
    '{"nome": "kit de lapis", "preco": 43.45 }',
    '{"nome": "caneta", "preco": 7.45 }'
]

// retornar um array apenas com preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)