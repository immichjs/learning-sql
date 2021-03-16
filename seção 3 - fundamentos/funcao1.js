// Funções são blocos de construção fundamentais em javascript. Uma função é um
// procedimento de javascript - Um conjunto de instruções que executa uma tarefa ou
// calcula um valor. Para usar uma função, você deve defini-la em algum lugar no 
// escopo do qual você quiser chamá-la.

// Função sem retorno.
function imprimeSomaDeDoisNumeros(x, y) {
console.log(`Resultado sem return: ${x + y}`)
}

imprimeSomaDeDoisNumeros(3, 4)
imprimeSomaDeDoisNumeros(1) // Resulta em um erro NaN.
imprimeSomaDeDoisNumeros(1, 2, 3, 4, 5) // Aceita apenas os 2 primeiros parâmetros e ignora o 
// restante.
imprimeSomaDeDoisNumeros() // Nenhum valor atribuido resulta em NaN.

// Função com retorno.
function retornaSomaDedoisNumeros(x = 0, y = 0) { // Valores padrões definidos.
    return x + y
}

const resultWithReturn = 'Resultado com return: '
console.log(`${resultWithReturn + retornaSomaDedoisNumeros(1, 1)}`)
console.log(`${resultWithReturn + retornaSomaDedoisNumeros(1)}`)
console.log(`${resultWithReturn + retornaSomaDedoisNumeros()}`) // Toda função que for chamada
// é necessário () após o identificador da função.