console.log('a =', a)
var a = 2
console.log('a =', a)

// Hoisting não ocorre em let, const e function expression. 'Temporal dead zone'.

// {                                         // let e const.
//     console.log('x =', x)
//     let x = 2
//     console.log('x =', x)
// } {
//     console.log('y =', y)
//     const y = 2
//     console.log('y =', y)
// } {                                       // function expression.
//     console.log(falar())
//     const falar = function(nome = 'Não definido') {
//         return nome
//     }
//     console.log(falar())
// } {
//     console.log(soma(2, 3))
//     const somar = (x, y) => x + y
//     console.log(somar(2, 3))
// }

// function declaration.
console.log(falarNome('Nidalee')) // Ocorre hoisting em function declaration.
function falarNome(nome = 'Não definido') {
    return nome
}
console.log(falarNome('Neeko'))

// Vantagens de usar hoisting em function declaration.
function calcular() {
    return resultado() // Ocorre o hoisting já retornando o valor das funções definidas após.
    // Muitos códigos...
    function somar(x, y) {
        return x + y
    }
    function resultado() {
        return somar(10, 5) / 3
    }
}
console.log(calcular())