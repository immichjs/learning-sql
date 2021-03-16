function teste(num) {
    if(num > 7)
        console.log(num) // Executa apenas 1 linha após o if caso não utilize '{}'.
    console.log('Final')
}
teste(6.9)
teste(7.1)

function teste2(num) {
    if(num > 7) ; { // Não utilizar ';' em estruturas de controle porque valem como uma
    // instrução válida.
    // ()
    // ; codificação válida. 
    // {   
    // Scope.
    // }
        console.log(num)
    }
}
teste2(6.9)
teste2(7.1)