const escola = [{
    nome: 'turna m1',
    alunos:[{
        nome: 'gustavo',
        nota: 7.9
    },{
        nome: 'ana',
        nota: 9.3
    }]
},{
    nome: 'turma m2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    },{
        nome: 'carlos',
        nota: 7.3
    }]
}]

const getNotaDoaluno = aluno => aluno.nota
const getNotasdaTurma = turma => turma.alunos.map(getNotaDoaluno)

const notas1 = escola.map(getNotasdaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))

}

const notas2 = escola.flatMap(getNotasdaTurma)
console.log(notas2)



