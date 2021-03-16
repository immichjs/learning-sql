// Classe.
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Qiyana')
p1.falar()

// Função factory.
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Ahri')
p2.falar()