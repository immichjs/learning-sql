// Função em javascript é First-Class Object (Citizens).
// Higher-Order function.

// Cria de forma literal.
function fun1() {}

// Armazenar uma função em uma variável, sendo assim chamada de função anonima.
const fun2 = function() {}

// Armazena em um array.
const array = [
    function(x, y) {
        return x + y
    }, fun1, fun2 
]
// Em vez de inserir uma function diretamente pode se armazenar em uma variável,
// sendo assim mais compreensível.
console.log(array[0](2, 3)) // Identificador[indice](parâmetros).

// Armazena em um Atributo de Objeto.
const obj = {}
obj.falar = function() { // obj.[atributo criado externamente] = function() {}.
    return 'Estou falando.'
}
console.log(obj.falar()) // () é obrigatório caso queira chamar um função.

// Passar uma função como parâmetro.
function run(fun) {
    fun()
}
run(() => console.log('Estou falando.'))

// Uma função pode retornar uma outra função.
function soma(x, y) {
    return function(z) {
        console.log(`${x} + ${y} + ${z} = ${x + y + z}`)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3) // Armazena em uma variável com os parâmetros da function.
cincoMais(4) // Chama a function armazenada com o terceiro parâmetro exigido.