const ferrari = {
    modelo: 'F40',
    maxVelocity: 324
}

const volvo = {
    modelo: 'V40',
    maxVelocity: 200
}

console.log(ferrari.prototype) // undefined, não contém o atributo 'prototype'.
console.log(ferrari.__proto__) // Procura o atributo dentro do scope, se não encontrar ele procura,
// fora do scope, ou seja, Object mais abrangente, Protótipo_Pai e retorna se achar, se não achar,
// retorna 'undefined'.
console.log(ferrari.__proto__ === Object.prototype) // True. // Por padrão ele apontará para
// Object.prototype.
console.log(volvo.__proto__ === Object.prototype) // True.
console.log(Object.prototype.__proto__ === null) // Não existe um protótipo superior a 
// 'Object.protoype', resultando em 'null'.
// __proto__ de Object.prototype = null.

function myObject() {}
console.log(typeof Object, typeof myObject) // Object é do tipo function.
console.log(Object.prototype, myObject.prototype)

// __proto__ é para não duplicar atributos, ou seja, buscar atributos atráves da herança.
// prototype, apenas pode a partir de function, __proto__ no lugar de prototype para Object.