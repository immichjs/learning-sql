// const pessoa aponta para um endereço de memória que contém o Object criado.
const pessoa = {
    nome: 'Michel'
}
pessoa.nome = 'Nicole' // É possível alterar os atributos desse Object criado a partir da const.
// Atribuindo um novo valor para pessoa.nome, mas não alterando o endereço de memória já criado.
console.log(pessoa.nome)

// pessoa = {nome: 'Zoe'} // 'pessoa' não poderá atribuir um novo Object, porque o endereço de 
// memória foi já foi definido como const, ou seja, não poderá ser alterado.

Object.freeze(pessoa) // Método que congela o Object, ou seja, torna um Object constante,
// então não poderá ser alterado, criado nem deletado nenhum atributo desse Object.
pessoa.nome = 'Neko'
pessoa.endereco = 'Rua Rivaldo Costa Oliveira'
delete pessoa.nome // Object congelado, então não da pra deletar nenhum atributo ou método dentro
// desse Object que foi congelado(freeze).

const pessoaConstante = Object.freeze({ // Object constante criado diretamente.
    nome: 'Zoe'
})
pessoaConstante.nome = 'Neko' // Não pode ser alterado.
console.log(pessoaConstante.nome)