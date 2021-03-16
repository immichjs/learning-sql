let a = 3
global.b = 123

this.c = 456
this.d = false
this.e = 'string'

console.log(a)
console.log(global.b)

console.log(this.c)
console.log(this.d)
console.log(this.e)

console.log(module.exports.c)

console.log(module.exports === this) // module.exports é estritamente = this em ambiente nodejs.
console.log(module.exports)

// Criando uma variável de forma incorreta.
abc = 3 // Evitar criar uma variável global sem um tipo declarado.
console.log(global.abc)
// module.exports = {e: 456, f: false, g: 'string'}
// Crie uma variável dentro de um Object, para não criar no escopo global/window.

let digaSeuNome = {
    nome: 'Qiyana',
    falar(nome) { // falar: function(){} também é possível.
        return `Eu sou ${nome || this.nome}`
    } // Quanto dentro do Object
    // this vale apenas para o Object: digaSeuNome.
}
console.log(digaSeuNome.falar('Michel'))