class lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class ciclofinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addlancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorconsolidado = 0
        this.lancamentos.forEach(l => {
            valorconsolidado += l.valor
        })
        return valorconsolidado
 
    }

}
const salario = new lancamento('Salário', 4500)
const contadeluz = new lancamento('luz', - 329)
const imposto = new lancamento('imposto', - 498)
const segurosaude = new lancamento('segurosaude', - 329)

const contas = new ciclofinanceiro(6, 2019)
contas.addlancamentos(salario, contadeluz, imposto,segurosaude)
console.log(contas.sumario())
console.log(typeof(lancamento))