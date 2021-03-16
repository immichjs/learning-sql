// Uma function anônima nada mais é que uma function sem nome.
function soma(x, y) {
    return x + y
}

// Todas são funções anônimas.
const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => { // Uma função => sempre será uma função anônima.
    return x * y
})

const pessoa = {
    nome: 'Qiyana',
    nome2: 'Neeko',
    nomeArrow: 'Nidalee',

    falar: function() {
        console.log(`Olá eu sou ${this.nome}`) // Referênciando Object 'pessoa'.
    },
    falar2() { // Esta syntax também é válida.
        console.log(`Olá eu sou ${this.nome2}`) // Referênciando Object 'pessoa'.
    },
    falarArrow: () => {
        console.log(`Eu sou ${pessoa.nomeArrow}`) // Referênciando o atributo 'falarArrow'.
    }
}

pessoa.falar()
pessoa.falar2()
pessoa.falarArrow()