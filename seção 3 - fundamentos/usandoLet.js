// Scope global, scope de function e scope de bloco.
let numero = 1
{
    let numero = 2
    console.log('Dentro: ', numero) // Procura a variável dentro do scope se não for existente, 
    // procura no scope de fora
}
console.log('Fora: ', numero)