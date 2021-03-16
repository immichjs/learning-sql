console.log(soma(2, 3)) //  carrega todas as function primeiro, podendo assim ser chamada antes
// mesmo de sua declaração.

// Declaração de função.
function soma(x, y) {
    return `Resultado de ${x} + ${y} = ${x + y}`
}

// Expressão de função
const sub = function(x, y) { // Não é possível ser chamada antes de ser declarada.
    return `Resultado de ${x} - ${y} = ${x - y}`
}
console.log(sub(3, 2))

// Expressão de função nomeada.
const multi = function multi(x, y) { // Mesmas regras de function expression.
    return `Resultado de ${x} . ${y} = ${x * y}`
}
console.log(multi(3, 2))