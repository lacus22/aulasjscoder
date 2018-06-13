function carro(velocidademaxima = 200, delta =5){
//stributo privado
let velocidadeatual = 0
//metodo publico

this.acelerar = function () {
    if (velocidadeatual + delta <= velocidademaxima){
        velocidadeatual += delta

    } else {
        velocidadeatual = velocidademaxima
    }
}
// metodo publico
this.getvelocidadeatual = function () {
    return velocidadeatual
}

}

const uno = new carro
uno.acelerar()
console.log(uno.getvelocidadeatual())
const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeatual())

console.log(typeof carro)
console.log(typeof ferrari)