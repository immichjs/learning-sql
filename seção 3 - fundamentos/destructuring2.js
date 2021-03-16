const [a] = [10]
console.log(`${a} + 2 = ${a + 2}`)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) // 10, 9, undefined, 0.

const [, [, nota]] = [[1, 2, 3], [4, 5, 6]] // Não é recomendado utilizar porque é de
// difícil leitura e compreensão
console.log(nota)