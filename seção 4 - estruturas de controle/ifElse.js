const imprimeResultado = nota => {
    if(nota >= 7)
        console.log('Aprovado com ' + nota)
    else {
        console.log('Reprovado com ' + nota)
    }
}

// Solução com operador ternário.
const imprimeResultadoComTernario = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' 

imprimeResultado(7.1)
imprimeResultado(6.9)
imprimeResultado('String') // Cuidado com isso por ser uma línguagem fracamente tipada.

console.log(imprimeResultadoComTernario(7.1))
console.log(imprimeResultadoComTernario(6.9))