// Operadores relacionais retornam apenas true ou false.
console.log('1: ', '1' == 1); // True, é igual à 1.
console.log('2: ', '1' === 1); // False, é igual mas não do mesmo tipo.
console.log('3: ', '3' != 3); // False, não é diferente de 3.
console.log('4: ', '3' !== 3); // True, é diferente por se der outro tipo.

console.log('5: ', 3 > 2); // True, maior que.
console.log('6: ', 3 < 2); // False, menor que.
console.log('7: ', 3 >= 2); // True, maior ou igual.
console.log('8: ', 3 <= 2); // false menor ou igual.

const d1 = new Date(0);
const d2 = new Date(0);
console.log('9: ', d1 == d2); // False compara o endereço de memória, não o valor em si.
console.log('10: ', d1 === d2); // False.
console.log('11: ', d1.getTime() === d2.getTime()); // True, compara o valor em ms, por ser do 
// mesmo tipo.


console.log('12: ', undefined == null); // True.
console.log('13: ', undefined === null); // False.
// É melhor utilizar === do que == por verificar não só o valor como tipo do dado.