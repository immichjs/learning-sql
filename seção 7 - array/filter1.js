const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

// Parâmetros da função callback: element, index, array.
console.log(produtos.filter(function() { // Aplica o callback para cada elemento do array, se
    // retorne 'true', o elemento será adicionado no array que será criado, caso contrário, não.
    return false // Se nenhum elemento passar no teste do callback, será gerado um array vazio.
}))

const price = element => element.preco >= 500 // Verifica se o elemento tem o preço >= 500.
const isFragile = element => element.fragil // Verifica se o elemento é frágil a partir dos valores
// booleanos definidos direto no elemento.

console.log(produtos.filter(price).filter(isFragile)) // Retorna 'true' ou 'false' para cada
// elemento que for testado na chamada do callback. E cria um novo array com todos os elementos
// que passaram no teste de callback de cada filter().