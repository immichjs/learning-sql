const champions = [
    { nome: 'Ahri', nota: 7.9 },
    { nome: 'Nidalee', nota: 9.2 }
]

// Imperativo, é preciso escrever passo a passo de algo que você quer aconteça, e quase não da
// para reutilizar em outra parte do código, já que é uma coisa só.
let total = 0 // Variável que vai ser adicionado todos os valores.
for(let i = 0; i < champions.length; i++) { // Percorre o index do array e incrementa +1 na
    // variável 'i', enquanto < que o tamanho do array.
    total += champions[i].nota // Incrementa cada valor de 'nota' na variável total, que for 
    // encontrado enquanto percorre o array.
}
console.log(total / champions.length) // Variável 'total', dividido pelo tamanho do array.

// Declarativo, prioriza o reúso de funções em outras partes do código, e 'o que' precisa ser
// feito.
const getNota = element => element.nota // Função que pega a 'nota' dos elementos de um array.
const soma = function(element, atual) {
    return (element + atual) / this.length // Função que soma dois parâmetros e divide pela 
    // quantidade de elementos do array que for chamado
}
console.log(champions.map(getNota).reduce(soma.bind(champions))) // Utiliza um bind(), para definir
// um contexto de quem é o this da função.

// Declarativo tem mais a ver com o paradigma Funcional.