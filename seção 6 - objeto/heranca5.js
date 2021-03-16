console.log(typeof String) // function.
console.log(typeof Array) // function.
console.log(typeof Object) // function.

// Toda função tem um atributo chamado 'prototype'.
String.prototype.reverse = function() { // Utilizando prototype para criar um novo método, dentro
    // de item já existente direto da API javascript.
    return this.split('').reverse().join('') // this é a string ''.
}
console.log('Curso Web Moderno'.reverse()) // Inverteu toda string.

Array.prototype.first = function() {
    return this[0] // Retorna o primeiro elemento.
}
console.log([1, 2, 3, 4].first()) // Chama o método criado anteriormente do protótipo de Array.
console.log(['a', 'b', 'c'].first())

// Cuidados em adicionar novos métodos em itens já existentes na API.
// Não é recomendado substituir um método já criado dentro de um item da API javascript.
String.prototype.toString = function() { // Não substituir comportamentos que já existam de forma
    // global.
    return 'Lascou tudo'
}
console.log('Curso Web Moderno'.reverse())