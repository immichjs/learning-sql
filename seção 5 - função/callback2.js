const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem utilizar callback.
const notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Utilizando callback.
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
}) // Retorna um valor verdadeiro ou falso para cada elemento do array 'notas', e insere uma
// espécie de 'sub-array' apenas com os elementos que retornar true.
console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7 // Cria uma function que pode ser utilizada em qualquer
// outra parte do código.
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)