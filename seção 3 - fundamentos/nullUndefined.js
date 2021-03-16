let a = {nome: 'Nidalee'}
let b = a
console.log(a, b) // Referência um endereço de memória, desde que seja tipo [] ou {}.
b = 4
a = 2
console.log(b, a) // Cria uma cópia de valores definidos, desde que sejam tipos number,
// string, boolean etc...

let valor
const produto = {} // Objeto produto foi inicializada, porém não contém nenhum valor.
console.log(valor) // Variável não foi inicializada, ou seja, não contém valor.
valor = null // Armazena na memória um espaço com valor null.
console.log(valor)
console.log('valor.toString() é a mesma coisa que null.toString()') // Causa um erro porque não 
// existe nenhum valor definido dentro da variável 'valor'.

console.log(produto.preco) // Atributo do objeto não foi definido.
console.log(produto) // Objeto vazio.
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar reatribuir uma variável com 'undefined'.
console.log(!!produto.preco) // Convertido em boolean '!!'.
delete produto.preco // Delete o atributo como um todo.
console.log(produto)

produto.preco = null // É uma boa prática pra resetar um valor de uma variável ou
// valor de um atributo.
console.log(produto)