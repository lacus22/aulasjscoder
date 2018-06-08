//function area(largura, altura) {
//const area = largura * altura 
// if(area > 20){
  //   console.log(`Valor acima do permitido: ${area}m2.`)
 //}// else { 
    // return area
 //}
//}

//console.log(area(2, 2))
//console.log(area(2))
//console.log(area())
//console.log(area(2, 3, 3, 4, 5, 5, 6 ))
//console.log(area(5, 5))

//parametros variáveis
 

function soma() {
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 3, 6.7))
console.log(soma('a','b', 'c'))
console.log(soma(1.1, 3.3, "teste" ))






