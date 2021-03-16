const valores = [7.7, 8.9, 6.3, 9.2]; // Em javascript um array é dinámico e não contém um número
// de indice definido.
console.log(valores);
console.log(valores[0], valores[3]);
console.log(valores[4]); // Retornar undefined.

valores[4] = 10; // Atribuindo diretamente um valor a uma posição de array
// a partir do indice definido entre [].
console.log(valores[4].toFixed(2));
console.log(valores);
console.log(`Existem '${valores.length}' posiçoes, dentro do array 'valores'`);

valores.push({ id: 3 }, null, 0, false, '', NaN, undefined,' '); // Insere dentro do array
// já criado anteriormente.
console.log(valores);

console.log(valores.pop()); // Remove e retorna o ultima valor do array.
// desde que esteja dentro de um 'console.log();'.
console.log(valores); // ' ' foi removido.
delete valores[0]; // Deleta o valor definido pelo indice entre [].
console.log(valores);

console.log(typeof valores); // Em javascript um array é do tipo Object.