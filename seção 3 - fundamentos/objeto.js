const prod1 = {}
const prod2 = { // prod2 é um identificador de um objeto com vários atributos e valores.
    nome: 'Moto G6',
    marca: 'Motorola',
    preco: 1299.90
} // É definido por { atributo: valor }.

prod1.nome = 'Galaxy J4 Core'
prod1.marca = 'Samsung'
prod1.preco = 899.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com caractere space bar.

console.log(prod1)
console.log(prod2)

console.log(typeof prod1, typeof prod2); // Entre chaves {Object} e entre colchetes [Array].