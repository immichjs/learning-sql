const getInteiroAleatorio = (min = 0, max = 100) => {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do { // Executa a instrução a seguir pelo menos uma vez e no fim faz a condição.
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção gerada aleátoriamente: ${opcao}`)
} while(opcao != -1) // Verifica se a condição ainda é verdadeira.
console.log('Até mais!')