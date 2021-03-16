// JSON = Javascript Object Notation.
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj)) // Transforma um Object em um JSON.
// JSON não lê function contida no Object.

// Maneiras erradas de se escrever um JSON.
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) Não é um JSON válido.
// console.log(JSON.parse('{ a: 1, b: 2, c: 3 }')) Não é um JSON válido.
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) Não é um JSON válido.
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 } ')) // JSON é válido.
console.log(JSON.parse('{ "a": 2, "b": "String", "c": true, "d": {}, "e": []}')) // JSON é válido.
// JSON permite adicionar Object, Array e Boolean em formato textual.

