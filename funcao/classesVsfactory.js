class Pessoa{
    construtor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joão')
p1.falar()

const pessoa = nome => {
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = pessoa ('paulo')
p2.falar()