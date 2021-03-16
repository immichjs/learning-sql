// Function anonima
const imprimeSomaDeDoisNumeros = function(x = 0, y = 0) {
    console.log(`Função sem return: ${x + y}`)
}
imprimeSomaDeDoisNumeros(3, 2)

// Armazena uma arrow function dentro de uma variável constante.
const retornaSomaDeDoisNumeros = (x = 0, y = 0) => { // Arrow function sempre é uma função anônima.
    return x + y
}
console.log(`Função com return implícito: ${retornaSomaDeDoisNumeros(3, 2)}`)

// Retorno implícito
const retornaSubtracaoDeDoisNumeros = (x = 0, y = 0) => x - y
console.log(`Função com return implícito: ${retornaSubtracaoDeDoisNumeros(3, 2)}`)

const imprime = parameter => console.log(parameter)
imprime('Isso é uma função de 1 linha com return implícito')