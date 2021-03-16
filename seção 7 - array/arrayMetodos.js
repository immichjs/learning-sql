const champions = ['Ahri', 'Neeko', 'Nidalee', 'Karma'] // Array const não pode ser alterado o
// endereço de memória, por exemplo: champions = {}, mas os elementos podem ser alterados.

champions.shift() // Remove o primeiro elemento do array.
console.log(champions)

champions.pop() // Remove o último elemento do array.
console.log(champions) // ['Ahri', 'Neeko', 'Nidalee'].

champions.push('Syndra', 'Fiora') // Adiciona novos elementos no final do array, e podem ser
// adicionados múltiplos elementos em um só 'champions.push()'.
console.log(champions)

champions.unshift('Riven') // Adiciona novos elementos no começo do array, e podem ser
// adicionados múltiplos elementos, assim como o método 'push()'.
console.log(champions)

// splice, pode adicionar e remover elementos do array, ao mesmo tempo.
// Adicionar.
champions.splice(1, 0, 'Orianna') // Adiciona no index[1].
console.log(champions)
// Remover.
champions.splice(3, 1) // Remove 1 elemento a partir do index[3].

const algunsChampions = champions.slice(2) // Pega um pedaço de um array, gerandou um novo, 
// a partir do index[2](setado no parâmetro) em diante.

console.log(algunsChampions)

const algunsChampions2 = champions.slice(1, 4) // Pega os elementos a partir do index[1], e gera
// um novo array que vai até o index[4], porém não adiciona o [4], e sim até o [3].
// Sempre vai até o index setado no segundo parâmetro mas retorna apenas até o valor anterior.
console.log(algunsChampions2)