const pessoa = {
    nome: 'Michel',
    idade: 17,
    peso: 55
}

console.log(Object.keys(pessoa)) // Retorna um array com apenas o nome dos atributos.
console.log(Object.values(pessoa)) // Retorna um array com apenas os valores dos atributos.
console.log(Object.entries(pessoa)) // Retorna um array com sub array, com todos os nomes e valores
// contido dentro do Object 'pessoa'. 

Object.entries(pessoa).forEach(element => { // Percorre o array retornado do Object.
    console.log(`${element[0]}: ${element[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { // Percorre o array retornado do Object, mas
    // utilizando 'Destructuring'. [Array] ou {Object}.
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'nacimento', {
    enumerable: true, // Numerável.
    writable: false, // Não pode ser atribuido um novo value.
    value: '20 / 11 / 2001'
})
console.log(Object.keys(pessoa))
pessoa.nacimento = '12 / 12 / 2002' // Imutável por causa da propriedade 'writable' ser false.
console.log(Object.values(pessoa))

// Assign: ES6. 'Juntar vários Object em apenas 1'.
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } // Substitui o valor do atributo já contido na constant. 'destino'.
const obj1 = Object.assign(destino, o1, o2) // o1 & o2 serão juntados no Object 'destino'
console.log(obj1)
const obj2 = Object.assign({}, o1, o2) // Sempre bom criar um novo Object no parâmetro.
console.log(obj2)

Object.freeze(obj2) // Congela o Object, ou seja 'constante', não podendo ser alterado os valores.
obj2.c = 1234
console.log(obj2)