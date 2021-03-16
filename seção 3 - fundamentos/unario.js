let num1 = 1, num2 = 2
num1++ // Pós incremento.
console.log(num1)
--num1 // Pré decremento.
console.log(num1)

console.log(++num1 === num2--) // True, porque 'num1' foi pré incrementado e num2
// foi pós incrementado sendo assim tem o mesmo valor.
// Evitar usar esse tipo de lógica por ser complexa de ser entendida
console.log(num1 === num2) // Aqui já não tem o mesmo valor porque foi descrementado
// na instrução anterior.