function area(largura = 0, altura = 0) { // Parâmetros com valores padrões
    const area = largura * altura

    if(area > 20) {
        console.log(`Ultrapassou o valor permitido: ${area}m²`)
    } else {
        return `Valor da área: ${area}`
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 3, 4, 5)) // Armazena os dois primeiro parametros e ignora o resto.
console.log(area(5, 5))