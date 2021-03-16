const carrinho = [ // Array com elementos JSON.
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObject = json => JSON.parse(json) // Converte os dados JSON para Object.
const apenasPreco = element => element.preco // Acessa todos valores dos atributos 'preco'
// depois de ser convertido para Obejct.

const resultado = carrinho.map(paraObject).map(apenasPreco) // Chama a call back paraObject, para
// cada elemento JSON do array, e converte para Object, depois acessa apenas os atributos, 'preco'.
console.log(resultado) // Array com todos os preços.