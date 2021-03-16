// Object.preventExtensions, impede o Object de ser adicionado novos atributos.
const produto = Object.preventExtensions({
    nome: 'J4 Core',
    preco: '899.90',
    tag: 'Promoção'
})
console.log('Extensíveis:', Object.isExtensible(produto)) // Verifica se o Object é extensível.
// Que pode ser adicionado novos atributos com valores dinâmicamente.

console.log(produto)
produto.nome = 'S5' // Permite alterar valores de atributos já existentes no Object criado com
// Object.preventExtensions.
produto.descricao = 'Smarthphone' // Não é permitido criar novos atributos dentro desse Object.
delete produto.tag // É possível deletar atributos já criados anteriormente no Object.
console.log(produto)

// Object.seal, impede tem quase a mesma função do preventExtensions.
const pessoa = Object.seal({
    nome: 'Michel',
    idade: 17
})
console.log(Object.isSealed(pessoa)) // True. Verifica se o Object está selado.
console.log(Object.isSealed(produto)) // False.

console.log(pessoa) // { nome: 'Michel', idade: 17 }
pessoa.sobrenome = 'Cristyne' // Não é permitido adicionar novos atributos, nem deletar atributos
// já existentes no Object com 'Object.seal'.
delete pessoa.nome
pessoa.nome = 'Nicole' // Só é permitido alterar os valores dos atributos de um Object que foi
// selado com 'Object.seal'.
console.log(pessoa) // { nome: 'Nicole', idade: 17 }

// Object.freeze deixa o Object completamente constante.
// Não é permitido: 
// 1. Alterar valores de atributos já existentes.
// 2. Criar novos atributos para esse Object com freeze.
// 3. Deletar atributos existentes.
const congelado = Object.freeze({
    falar() { // function que retornar uma string.
        return 'Eu estou congelado.'
    }
})
console.log(Object.isFrozen(congelado)) // Verifica se Object está congelado. 'Object.freeze'.

console.log(congelado)
console.log(congelado.falar()) // Executando a function criada dentro do Object 'congelado'.

// Não permitido:
congelado.nome = 'Congelado'
congelado.falar = function() {
    return 'Não estou congelado'
}
delete congelado.falar

console.log(congelado)
console.log(congelado.falar())