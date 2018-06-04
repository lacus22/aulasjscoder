//armazenando uma função em variável

const imprimeSoma = function (a, b){
    console.log(a + b)
}
imprimeSoma(2, 3)


//armazenando uma função arrow em uma variável

const soma = (a, b ) => {
    return a + b
}
console.log(soma(2, 3))


//retorno implicito

const subracao = (a, b) => a - b
console.log(subracao(2, 3))

const imprimir2 = a => console.lo