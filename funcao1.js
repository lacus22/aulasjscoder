//funcao sem retorno

function imprimiSoma(a, b){
    console.log(a + b)
}

imprimiSoma(2, 3)
imprimiSoma(2)
imprimiSoma()

// funcao com retorno

function soma (a, b = 3){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())