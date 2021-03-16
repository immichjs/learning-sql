// ECMAScript 6.
const pessoa = {
    nome: 'Neeko',
    idade: '13',
    endereco: {
        rua: 'Doutor Rivaldo Costa Oliveira',
        numero: 236
    }
}

const {nome, idade} = pessoa // Retire do objeto 'pessoa' os atributos
// 'nome' e 'idade'.
console.log(`Nome: ${nome} \nIdade: ${idade}`)

// nome = 'Nidalee' só é possível atribuir um novo valor a um atributo retirado de
// um Object se referenciar Object antes.
pessoa.nome = 'Qiyana'
pessoa.idade = 16
const {nome: name, idade: age} = pessoa // Retira do Object 'pessoa' e Atribui
// um novo identificador para ser chamada.
console.log(`Nome: ${name} \nIdade: ${age}`)

const {sobrenome, bemHumorada = true} = pessoa // Se não encontrar nenhum atributo
// com o identificador definido entre {}, e resulta em 'undefined'.
console.log(sobrenome, bemHumorada)

const {endereco: {rua, numero, cep}} = pessoa // É possível extrair um atributo
// de dentro de outro atributo de um Object utilizando ':'.
console.log(rua, numero, cep)
// Mas resulta em 'undefined' somente se for um atributo do Object inicial não
// um atributo de um atributo, caso utilizado gera um erro.
// const {conta: {agencia, numero}} = pessoa.
// console.log(conta, agencia, nome).