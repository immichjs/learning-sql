function aleatorio({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(Math.random().toFixed(1)) // Retorna um valor aleatório de 0 a 1.0

const retornarNumerosAleatoriosDe0A10 = {min: 0, max: 10}
console.log(aleatorio(retornarNumerosAleatoriosDe0A10)) // de 0 até 10

console.log(aleatorio({min: 20})) // Retorna um numero de 20 até 1000
console.log(aleatorio({min: 955})) // Retorna um numero de 955 até 1000
console.log(aleatorio({})) // Retorna um numero de 0 até 1000

// console.log(aleatorio()) Gera um erro por não ter definido nenhum valor dentro do
// object como parâmetro.