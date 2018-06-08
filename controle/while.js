

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhoda foi ${opcao}.`)
}

console.log('ate a proxima!')


function getinteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = 0

while (opcao != -1) {
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('depois a gente imprime')