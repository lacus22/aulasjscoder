const alunos = [
    {nome: 'paulo', nota: 7.3, bolsista: false},
    {nome: 'pedro', nota: 9.2, bolsista: true},
    {nome: 'joao', nota: 9.8, bolsista: false},
    {nome: 'alfredo', nota: 8.7, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algunBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algunBolsista))