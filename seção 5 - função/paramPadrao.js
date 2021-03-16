// Estratégia 1 para gerar valor padrão.
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(`${soma()}, ${soma(3)}, ${soma(1, 2, 3)}, ${soma(0, 0, 0)}\n`)

// Estratégia 2, 3 e 4.
function soma2(a, b, c) {
    a = a != undefined ? a : 1 // if(a != undefined) {return a} else {return 1}.
    b = 1 in arguments ? b : 1 // if(arguments[b]) {return b} else {return 1}.
    c = isNaN(c) ? 1 : c // if(c = isNaN) {return 1} else {return c}.

    return a + b + c
}
console.log(`${soma()}, ${soma(3)}, ${soma(1, 2, 3)}, ${soma(0, 0, 0)}\n`)

// Estratégia ES6.
function soma3(a = 0, b = 0, c = 0) {
    return a + b + c
}
console.log(`${soma()}, ${soma(3)}, ${soma(1, 2, 3)}, ${soma(0, 0, 0)}\n`)