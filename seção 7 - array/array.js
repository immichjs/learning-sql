console.log(typeof Array) // Array é uma function.
console.log(typeof new Array) // Quando uma função é instânciada resulta um Object.
console.log(typeof []) // Array literal já é um Object.
// Array é uma estrutura dinâmica, aumenta e diminui de tamanho conforme elementos são adicionados,
// e retirados do array, além disso é uma estrutura heterogenia, ou seja, pode armazenar vários
// tipos de dados num único array.
// O recomendado é criar um array para cada tipo de dado que for ser inserido.
// Criar um array const, significa apenas que o endereço de memória dele não pode ser alterado, mas
// os elementos contido nele, podem sim ser alterado.

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Não é recomendado criar arrays, dessa maneira.
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Array é acesso a partir de um index, começando no [0].
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Retorna 'undefined' quando tenta acessar um elemento de um array que
// ainda não foi definido.

aprovados[3] = 'Paulo' // Forma válida de adicionar um novo elemento no Array, porém é melhor para
// quando for substituir um valor de um elemento.
aprovados.push('Abia') // Adiciona um elemento depois do último. 'RECOMENDADO'.
console.log(aprovados.length) // 'length', é para mostrar o tamanho do array.

aprovados[9] = 'Rafael' // Não gera nenhum erro, mas alguns valores antes que não contém nenhum 
// elemento ocupando o array, são atribuidos o valor por padrão 'undefined'.
console.log(aprovados.length) // Tamanho do array passou a ser '10'.
console.log(aprovados[8] === undefined) // True, é estritamente igual a undefined
console.log(aprovados[8] === null) // False.

console.log(aprovados) // 4 empty items // 4 itens vazios.
aprovados.sort() // Este método, resulta em uma alteração no array original de forma com que sejam
// organizados a partir pela pontuação unicode de cada caractere contido no elemento.
console.log(aprovados)

delete aprovados[1] // Apenas atribui o valor 'undefined' para o index definido dentre '[]', mas
// não ordena o array, como se o elemento não tivesse sido excluído.
console.log(aprovados[1]) // undefined.
console.log(aprovados[2]) // Continua sendo index[2] pois o array não foi ordenado após o uso do
// 'delete'.

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Primeiro parâmetro define qual index será iniciado, e o segundo para
// deletar uma quantidade de elementos a partir o primeiro parâmetro, nesse caso, apenas 1 a partir
// do elemento 'Carlos', de index[1].
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // Para adicionar novos elementos com splice, é 
// só atribuir o segundo parâmetro como valor '0'.
console.log(aprovados) // ['Bia', 'Elemento1', 'Elemento2'].