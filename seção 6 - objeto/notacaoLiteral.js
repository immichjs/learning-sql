const a = 1
const b = 2
const c = 3

const obj1 = { // Utilizar essa forma apenas caso queira mudar o nome do atributo.
    a: a,
    b: b,
    c: c
}
// Verifica que tem uma variável fora do Object com esse identificador, já define o mesmo nome de
// atributo, e o valor contido na variável será o valor dentro desse atributo.
const obj2 = { a, b, c } // ES6, simplificando

const nomeAtributo = 'nota'
const valorAtributo = 7.8
const obj3 = {}
obj3[nomeAtributo] = valorAtributo // Cria dinâmicamente o atributo e seus dados a partir de
// constantes e variável criadas externamente nomeando os dados contido, como nome de atributo e
// seus respectivos valores.
console.log(obj3)

obj4 = { [nomeAtributo]: valorAtributo } // É a mesma coisa que a anterior, mas criado diretamente.
console.log(obj4)

obj5 = {
    funcao1: function() { // Criando funções ou métodos dentro de um Object de maneira antiga.
        return 'Michel'
    },
    funcao2() { // Criando funções com o novo recurso do ES6, sem a palavra reservada 'function'.
        return 'Nicole'
    }
}
console.log(obj5.funcao1(), obj5.funcao2())