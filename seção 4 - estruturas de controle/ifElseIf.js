Number.prototype.dentro = function(primeiro, ultimo) {
    return this >= primeiro && this <= ultimo  
}

const imprimeResultado = nota => {
    if(nota.dentro(9, 10)) // {} são opcionais quando utiliza-se uma unica instrução.
        console.log('Aprovado com nota muito alta.')
    else if(nota.dentro(7, 8.99)) // Só cai no próximo else if caso a condição anterior,
    // tenha sido false.
        console.log('Nota acima da média.')
    else if(nota.dentro(5, 6.99))
        console.log('Recuperação.')
    else if(nota.dentro(4, 0))
        console.log('Reprovado.')
    else { // else é opcional.
        console.log('Nota inválida')
    } // É possível apenas uma instrução de código quando não se usa {} no if.
}

imprimeResultado(10)
imprimeResultado(8)
imprimeResultado(6)
imprimeResultado(4)
imprimeResultado(-1)