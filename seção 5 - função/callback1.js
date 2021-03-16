const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(elemento, indice) {
    console.log(`${indice + 1}. ${elemento}`)
}

fabricantes.forEach(imprimir) // Percorre um array pelo elemento depois o indice do array.
fabricantes.forEach(elemento => console.log(elemento)) // Retorna apenas os elementos do array
// 'fabricantes'.