const numeros = [1, 2, 3, 4, 5]

// Map é utilizado para mapear um array e transformar os elementos dentro de um novo array que será
// gerado com o mesmo tamanho do array original.
let resultado = numeros.map(function(elemento) { // Pode receber 3 parâmetros assim como no
    // método forEach. 1. valorDoElemento, 2. indexDoElemento, 3. arrayCompleto.
    return elemento * 2 // Retorna um array com o dobro do valor de cada elemento contido do array
    // que foi gerado a partir do uso do metodo 'map'.
    // Um método que for passado para o 'map', é preciso ter um retorno, se não 'undefined' é 
    // setado por padrão pela API do javascript.
})
console.log(resultado) // Um novo array gerado com o dobro de cada elemento.
console.log(numeros) // Array original não sofreu modificações.

const somaDez = elemento => elemento + 10 // Return implícito.
const triplo = elemento => elemento * 3
const paraReal = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}`

resultado = numeros.map(somaDez).map(triplo).map(paraReal) // Gera um novo array, com todos os
// elementos +10, gera um novo array a partir do anterior, múltiplica cada elemento pelo triplo, 
// gera um novo array transformado com a forma de como serão apresentados os elemetnos do array.
const resultado2 = numeros.map(triplo).map(somaDez).map(paraReal) // Dependendo da ordem,
// o resultado que será gerado, pode ser completamente diferente 1 do outro
// Se .map(paraReal), for adionado primeiro resulta em 'NaN', em todos os elementos do array.
console.log(resultado)
console.log(resultado2)

const somarNumeros = element => element * 2

console.log(numeros.map(somarNumeros))