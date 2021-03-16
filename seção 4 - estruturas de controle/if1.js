function justGoodNews(nota) {
    if(nota >= 7) { // Se parâmetro 'nota', for maior ou igual a 7.
        console.log('Aprovado com ' + nota)
    }
}
justGoodNews(8.1)
justGoodNews(6.9)

function seForVerdadeEuFalo(valor) {
    if(valor) { // Se valor for true.
        console.log(`É verdadeiro? \n R: ${valor}`)
    }
}

// false
seForVerdadeEuFalo(false)
seForVerdadeEuFalo(0)

seForVerdadeEuFalo('')
seForVerdadeEuFalo(NaN)

seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(null)

// true
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(!!-1) // -1 é válido.

seForVerdadeEuFalo(!!'String vazia', !!' ')
seForVerdadeEuFalo(!!'?')

seForVerdadeEuFalo(!!'Array vazio', !![]) // Array vazio ou preenchido é true portanto válido.
seForVerdadeEuFalo(!![1, 2])

seForVerdadeEuFalo(!!{}) // Object com ou sem atributos é true.
seForVerdadeEuFalo(!!{ nome: 'Qiyana' })