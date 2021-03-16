const championAP = ['Ahri', 'Neeko']
const championAD = ['Qiyana', 'Fiora']
const todos = championAP.concat(championAD) // Concatena dois array ou mais.
// Não altera o array original.

console.log(todos, championAP, championAD)
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))