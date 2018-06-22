const alunos = [
    {nome: 'paulo', nota: 7.3, bolsista: false},
    {nome: 'pedro', nota: 9.2, bolsista: true},
    {nome: 'joao', nota: 9.8, bolsista: false},
    {nome: 'alfredo', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)