function MyObject() {}
console.log(MyObject.prototype)

const obj1 = new MyObject // Instância Object a partir de uma function.
const obj2 = new MyObject
console.log(obj1.__proto__ === obj2.__proto__) // True. Todos os objetos criados a partir de uma
// mesma function contrutora, apontam para o mesmo protótipo, a partir do atributo '__proto__'.
console.log(MyObject.prototype === obj1.__proto__) // True. Quando um Object é criado a partir, de
// de uma function construtora utilizando a palavra reservada 'new', o __proto__ desse Object
// aponta para a função_criada.prototype.

MyObject.prototype.nome = 'Anônimo'
MyObject.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}.`)
}

obj1.falar()
obj1.nome = 'Nicole' // Sobrescreveu o atributo do obje
obj1.falar()
console.log(MyObject.prototype)

const obj3 = {}
obj3.__proto__ = MyObject.prototype // Atribuição manual da referência do __proto__ de
// Object.prototype para MyObject.prototype.
obj3.nome = 'obj3'
obj3.falar()

// Resumo.
console.log((new MyObject).__proto__ === MyObject.prototype) // True, porque 'MyObject', foi
// instânciado pelo new, se tornando um Object, e utilizando o __proto__, e quando um Object é
// instânciado a partir da função ele são iguais.
console.log(MyObject.__proto__ === MyObject.prototype) // False. Exemplo acima.

console.log(MyObject.__proto__ === Function.prototype) // True, porque o atributo __proto__ da
// function 'MyObject', aponta para o protótipo de 'Function.prototype' por padrão.

console.log(MyObject.prototype.__proto__ === Object.prototype) // True.
console.log(Object.prototype.__proto__ === null) // True, porque não existe nada depois de
// Object.prototype
// Não é undefined porque o atributo existe, só que não aponta pra nenhum Object depois de
// Object.prototype, por isso é null.

/**
 * MyObject() { 
 *     prototype === MyObject.prototype { __proto__ === Object.prototype === null }
 *     __proto__ === Function.prototype { 
 *                       __proto__ == Object.prototype === null
 *                   }
 * }
 */