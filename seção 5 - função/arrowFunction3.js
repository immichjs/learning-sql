let comparaComThis = function(parameter) {
    console.log(this === parameter)
}
comparaComThis(global) // node: global, browser: window.
comparaComThis(this) // this não é estritamente igual a this, dentro de uma
// function normal.

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // this não está mais referênciando o Object global e sim
// 'obj'.

let comparaComThisArrow = parameter => console.log(this === parameter) // return implícito.
comparaComThisArrow(global) // this não referência o Object global nesse contexto.
// mas sim 'module.exports'/arquivo, porque arrow function em node,
// trabalho com módulos.

comparaComThisArrow(module.exports) // this === module.exports. 'true'.
comparaComThisArrow(this) // this === this. 'true'.

comparaComThisArrow = comparaComThisArrow.bind(obj) // Arrow function não referencia um Objeto com
// 'bind()'.

comparaComThisArrow(obj) // false.
comparaComThisArrow(module.exports)