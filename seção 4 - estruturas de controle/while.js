const getInteiroAleatorioEntre = (min = -1, max = 100) => {
    const valor = Math.random() * (max - min) + min // Returna um número com ponto de 0 e 1
    return Math.floor(valor)
}

let resultado = 0

while(resultado != -1) { // Executa enquanto seja '!=' diferente de -1.
    resultado = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção gerada aleátoriamente: ${resultado}`)
}

console.log('Até mais!')