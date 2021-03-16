// IIFE -> immediately invoked function expression.
// Envolver a função anônima com ().
(function(){
    // Qualquer coisa criada dentro dessa function, var, let, const, ficará visível apenas dentro
    // desse scope.
    console.log('Isso é apenas um teste.')
    console.log('Um segundo teste acontecendo.')
})() // () chama a função envolvida por ().