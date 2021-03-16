let double = function(number) {
    return 2 * number
}

// Arrow function são funções anonimas, quando não possui um identificador.
double = (number) => {
    return 2 * number
}

double = (number) => 2 * number // Return implícito.
console.log(double(Math.PI))

let ola = function() {
    return 'Olá'
}

// Importante o uso de () para funcionar corretamente a syntax de uma arrow function.
ola = () => 'Olá'
ola = _ => 'Olá' // Arrow function de um único parâmetro.
console.log(ola())