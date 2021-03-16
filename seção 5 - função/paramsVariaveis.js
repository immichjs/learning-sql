// Caso nenhum parâmetro seja passado na função, qualquer parâmetro que entrar, serão armazenados,
// no array 'arguments'.
function soma() {
    let soma = 0
    for(let i in arguments) {
        soma += arguments[i] // Acessar os parâmetros recebido pelo [] por se tratar de um array.
    }
    return soma
}

// Pode-se passar quantos parâmetros desejar, que será armazenado no arguments[index].
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

// Formas estranhas.
console.log(soma(1.1, 2.2, 'string'))
console.log(soma('string', 'gnirts'))
// Junta as strings com o valor de soma definido dentro da function com valor 0.