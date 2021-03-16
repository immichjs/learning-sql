const [a, b, c, d] = [3, 5, 1, 15]

const somar = a + b + c + d // Soma todos os valores.
const subtrair = d - b // Subtrai o valor de d por b.
const multiplicar = a * a // Multiplica a por ele mesmo.
const dividir = d / a // Divide d por a.
const modulo = d % a // Divide d por a e retorna o resto da divisão.
const exponencial = b ** (a - 1) // Exponenciação de b por a.

console.log(`${a} + ${b} + ${c} + ${d} = ${somar}`)
console.log(`${d} - ${b} = ${subtrair}`)
console.log(`${a} . ${a} = ${multiplicar}`)
console.log(`${d} / ${a} = ${dividir}`)
console.log(`${d} % ${a} = ${modulo}`)
console.log(`${b}² = ${exponencial}`)

console.log(`Convertido para negativo: ${-dividir}`)
console.log(`Convertido para negativo: ${-d}`)

// -dividir converte o resultado para negativo.
// Operador unário quando contém apenas um operando.
// Operador binário quando dois operam.
// Operador ternário quando três operam.