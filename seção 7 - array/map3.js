// Implementando o método map.
Array.prototype.map2 = function(callback) {
    const newArray = [] // Cria um novo array.
    for(let i = 0; i < this.length; i++) { // Percorre o array atual e incrementa no 'i'.
        newArray.push(callback(this[i], i, this)) // Da um push para o para o array criado, 
        // chamando a callback para cada elemento que for percorrido.
        // 1. valorDoElemento, 2. indexDoElemento, 3. arrayCompleto.
    }
    return newArray // Retorna o um novo array com os elementos, não alternado o array original.
}

const carrinho = [ // Array com elementos JSON.
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObject = json => JSON.parse(json) // Converte os dados JSON para Object.
const apenasPreco = carrinho => carrinho.preco // Acessa todos valores dos atributos 'preco'
// depois de ser convertido para Obejct.

const resultado = carrinho.map2(paraObject).map2(apenasPreco) // Chama a call back paraObject, para
// cada elemento JSON do array, e converte para Object, depois acessa apenas os atributos, 'preco'.
console.log(resultado) // Array com todos os preços.

Array.prototype.map3 = function(callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const numeros = [1, 2, 3, 4, 5]
const somar = element => element.toString()

console.log(numeros.map3(somar))