// Closure é o escopo criando quando a function é declada.
// Este escopo permite a function acessar e manipular variáveis externas á function.
// Contexto léxico em ação.
const x = 'Global'
function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const myFunction = fora()
console.log(fora())
console.log(fora()())
console.log(myFunction())