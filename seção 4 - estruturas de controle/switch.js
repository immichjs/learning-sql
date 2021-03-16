const imprimeResultado = function(nota) {
    switch(Math.floor(nota)) { // A expressão não retorna true ou false.
        case 10:
        case 9:
            console.log('Aprovado com nota muito alta.')
            break // break é utilizado pra sair do switch quando for executado o conteúdo.
        case 8:
        case 7:
            console.log('Nota acima da média.')
            break // Se não utilizar o break ele sai executando todos os case de baixo.
        case 6:
        case 5: { // Bloco de código é permitido.
            console.log('Recuperação.')
            break
        }
        case 4: case 3: case 2: case 1: case 0: // Pode ser colocado um ao lado do outro.
            console.log('Reprovado.')
            break
        default:
            console.log('Nota inválida.')
            break
    }
}

const noteVerify = (note) => {
    switch(Math.floor(note)) {
        case 10:
        case 9:
            console.log('Aprovado com nota muito alta.')
            break
        case 8:
        case 7:
            console.log('Nota acima da média.')
            break
        case 6:
        case 5:
            console.log('Recuperação.')
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado.')
            break
        default:
            console.log('Nota inválida.')
    }
}

imprimeResultado(-1)
imprimeResultado(4)
imprimeResultado(10)
imprimeResultado(8)
imprimeResultado(6)

console.log('')

noteVerify(-1)
noteVerify(4)
noteVerify(10)
noteVerify(8)
noteVerify(6)