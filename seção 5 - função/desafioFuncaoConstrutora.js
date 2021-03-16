function Pessoa(nome){
    this.nome = nome // sem o this.nome, não é possível alterar depois.
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Nidalee')
p1.falar()