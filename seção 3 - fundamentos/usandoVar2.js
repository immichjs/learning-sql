// Scope global e scope de função.
var numero = 1 // Evitar usar variáveis do tipo 'var' no escopo global.

{
    var numero = 2
    console.log("Dentro: ", numero)
}